import { jsPDF } from 'jspdf'
import type { ResolvedCv } from '../types/cv'
import type { PaperTone } from '../theme/paperTones'

const PAGE_WIDTH = 210
const PAGE_HEIGHT = 297
const TOP_MARGIN = 10
const BOTTOM_MARGIN = 10
const SIDEBAR_BG_WIDTH = 61
const SIDEBAR_TEXT_X = 8.5
const SIDEBAR_TEXT_WIDTH = 44
const MAIN_X = 68
const MAIN_WIDTH = 136
const MAIN_TOP = 13
const MAIN_BOTTOM = PAGE_HEIGHT - BOTTOM_MARGIN

type RichSegment = {
  text: string
  bold: boolean
}

const hexToRgb = (hex: string): [number, number, number] => {
  const sanitized = hex.replace('#', '')
  const normalized = sanitized.length === 3
    ? sanitized
        .split('')
        .map((char) => `${char}${char}`)
        .join('')
    : sanitized

  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ]
}

const applyFill = (pdf: jsPDF, hex: string) => {
  const [red, green, blue] = hexToRgb(hex)
  pdf.setFillColor(red, green, blue)
}

const applyStroke = (pdf: jsPDF, hex: string) => {
  const [red, green, blue] = hexToRgb(hex)
  pdf.setDrawColor(red, green, blue)
}

const applyText = (pdf: jsPDF, hex: string) => {
  const [red, green, blue] = hexToRgb(hex)
  pdf.setTextColor(red, green, blue)
}

const splitRichText = (text: string, emphasis: string[]): RichSegment[] => {
  if (emphasis.length === 0) {
    return [{ text, bold: false }]
  }

  const escaped = emphasis
    .filter(Boolean)
    .sort((left, right) => right.length - left.length)
    .map((value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  if (escaped.length === 0) {
    return [{ text, bold: false }]
  }

  const matcher = new RegExp(`(${escaped.join('|')})`, 'gi')

  return text
    .split(matcher)
    .filter(Boolean)
    .map((part) => ({
      text: part,
      bold: emphasis.some((value) => value.toLowerCase() === part.toLowerCase()),
    }))
}

const wrapRichText = (
  pdf: jsPDF,
  segments: RichSegment[],
  width: number,
  fontSize: number,
): RichSegment[][] => {
  const lines: RichSegment[][] = []
  let currentLine: RichSegment[] = []
  let currentWidth = 0

  const pushLine = () => {
    if (currentLine.length > 0) {
      lines.push(currentLine)
    }
    currentLine = []
    currentWidth = 0
  }

  for (const segment of segments) {
    const parts = segment.text.split(/(\s+)/).filter((part) => part.length > 0)

    for (const part of parts) {
      const isWhitespace = /^\s+$/.test(part)
      pdf.setFont('helvetica', segment.bold ? 'bold' : 'normal')
      pdf.setFontSize(fontSize)
      const partWidth = pdf.getTextWidth(part)

      if (!isWhitespace && currentLine.length > 0 && currentWidth + partWidth > width) {
        pushLine()
      }

      if (isWhitespace && currentLine.length === 0) {
        continue
      }

      currentLine.push({ text: part, bold: segment.bold })
      currentWidth += partWidth
    }
  }

  pushLine()
  return lines.length > 0 ? lines : [[{ text: '', bold: false }]]
}

const drawRichLine = (pdf: jsPDF, segments: RichSegment[], x: number, y: number, fontSize: number) => {
  let cursor = x

  for (const segment of segments) {
    pdf.setFont('helvetica', segment.bold ? 'bold' : 'normal')
    pdf.setFontSize(fontSize)
    pdf.text(segment.text, cursor, y)
    cursor += pdf.getTextWidth(segment.text)
  }
}

const drawBullet = (
  pdf: jsPDF,
  text: string,
  emphasis: string[],
  x: number,
  y: number,
  width: number,
): number => {
  const fontSize = 8.4
  const lineHeight = 3.7
  const bulletOffset = 3.1
  const lines = wrapRichText(pdf, splitRichText(text, emphasis), width - bulletOffset, fontSize)

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(fontSize)
  pdf.text('•', x, y)

  lines.forEach((line, index) => {
    drawRichLine(pdf, line, x + bulletOffset, y + index * lineHeight, fontSize)
  })

  return lines.length * lineHeight
}

const estimateBulletHeight = (pdf: jsPDF, text: string, emphasis: string[], width: number): number => {
  const lines = wrapRichText(pdf, splitRichText(text, emphasis), width - 3.1, 8.4)
  return lines.length * 3.7
}

const drawWrappedText = (
  pdf: jsPDF,
  text: string,
  x: number,
  y: number,
  width: number,
  fontSize: number,
  lineHeight: number,
): number => {
  pdf.setFontSize(fontSize)
  const lines = pdf.splitTextToSize(text, width) as string[]
  pdf.text(lines, x, y)
  return lines.length * lineHeight
}

const measureWrappedText = (pdf: jsPDF, text: string, width: number, fontSize: number, lineHeight: number) => {
  pdf.setFontSize(fontSize)
  const lines = pdf.splitTextToSize(text, width) as string[]
  return { lines, height: lines.length * lineHeight }
}

const estimateChipBlockHeight = (pdf: jsPDF, chips: string[], width: number): number => {
  if (chips.length === 0) {
    return 0
  }

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(6.9)
  let lineWidth = 0
  let lines = 1

  chips.forEach((chip) => {
    const chipWidth = pdf.getTextWidth(chip) + 3.8
    if (lineWidth > 0 && lineWidth + chipWidth + 1 > width) {
      lines += 1
      lineWidth = chipWidth
      return
    }

    lineWidth += lineWidth > 0 ? chipWidth + 1 : chipWidth
  })

  return lines * 4.1
}

const drawChips = (pdf: jsPDF, chips: string[], x: number, y: number, width: number, tone: PaperTone): number => {
  if (chips.length === 0) {
    return 0
  }

  applyFill(pdf, tone.stackBg)
  applyStroke(pdf, tone.stackBorder)
  applyText(pdf, '#3a3630')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(6.9)

  let cursorX = x
  let cursorY = y
  const lineHeight = 4.1

  chips.forEach((chip) => {
    const chipWidth = pdf.getTextWidth(chip) + 3.8
    if (cursorX > x && cursorX + chipWidth > x + width) {
      cursorX = x
      cursorY += lineHeight
    }

    pdf.roundedRect(cursorX, cursorY - 2.95, chipWidth, 3.2, 0.7, 0.7, 'FD')
    pdf.text(chip, cursorX + 1.9, cursorY - 0.62)
    cursorX += chipWidth + 1
  })

  return cursorY - y + lineHeight
}

const drawPageFrame = (pdf: jsPDF, tone: PaperTone) => {
  applyFill(pdf, tone.sheetBg)
  pdf.rect(0, 0, PAGE_WIDTH, PAGE_HEIGHT, 'F')
  applyFill(pdf, tone.sidebarBg)
  pdf.rect(0, 0, SIDEBAR_BG_WIDTH, PAGE_HEIGHT, 'F')
  applyStroke(pdf, tone.panelBorder)
  pdf.setLineWidth(0.2)
  pdf.line(SIDEBAR_BG_WIDTH, 0, SIDEBAR_BG_WIDTH, PAGE_HEIGHT)
}

const drawSidebarHeader = (pdf: jsPDF, cv: ResolvedCv) => {
  applyText(pdf, '#262422')
  pdf.setFont('times', 'bold')
  pdf.setFontSize(17)
  const nameLines = pdf.splitTextToSize(cv.person.fullName, SIDEBAR_TEXT_WIDTH) as string[]
  pdf.text(nameLines, SIDEBAR_TEXT_X, TOP_MARGIN + 4)

  const headerBottom = TOP_MARGIN + 4 + nameLines.length * 6.4
  applyStroke(pdf, '#8f8678')
  pdf.setLineWidth(0.4)
  pdf.line(SIDEBAR_TEXT_X, headerBottom + 1, SIDEBAR_TEXT_X + 18, headerBottom + 1)

  applyText(pdf, '#53504c')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8.8)
  pdf.text(cv.person.baseTitle, SIDEBAR_TEXT_X, headerBottom + 6)
}

const drawSidebarSectionTitle = (pdf: jsPDF, label: string, y: number) => {
  applyText(pdf, '#302d28')
  pdf.setFont('times', 'bold')
  pdf.setFontSize(9.2)
  pdf.text(label.toUpperCase(), SIDEBAR_TEXT_X, y)
}

const drawSidebarFull = (pdf: jsPDF, cv: ResolvedCv, tone: PaperTone) => {
  drawSidebarHeader(pdf, cv)
  let y = 46

  drawSidebarSectionTitle(pdf, cv.labels.contact, y)
  y += 5
  applyText(pdf, '#2f2b27')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8.3)
  const contactLines = [
    cv.person.email,
    cv.person.phone,
    cv.links.github,
    cv.links.linkedin,
    cv.links.twitter,
    cv.links.whatsapp ?? '',
  ].filter(Boolean)

  contactLines.forEach((line) => {
    const measured = measureWrappedText(pdf, line, SIDEBAR_TEXT_WIDTH, 8.3, 3.65)
    pdf.text(measured.lines, SIDEBAR_TEXT_X, y)
    y += measured.height + 0.45
  })

  y += 3
  drawSidebarSectionTitle(pdf, cv.labels.expertise, y)
  y += 5
  cv.expertise.forEach((group) => {
    applyText(pdf, '#3e3932')
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(7.4)
    pdf.text(group.title, SIDEBAR_TEXT_X, y)
    y += 3.7
    applyText(pdf, '#312d29')
    pdf.setFont('helvetica', 'normal')
    const items = group.items.join(', ')
    const measured = measureWrappedText(pdf, items, SIDEBAR_TEXT_WIDTH, 7.4, 3.25)
    pdf.text(measured.lines, SIDEBAR_TEXT_X, y)
    y += measured.height + 1.2
  })

  drawSidebarSectionTitle(pdf, cv.labels.hobbies, y)
  y += 5
  applyText(pdf, '#312d29')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(7.9)
  cv.hobbies.forEach((hobby) => {
    pdf.text(`• ${hobby}`, SIDEBAR_TEXT_X, y)
    y += 3.5
  })

  y += 1.8
  drawSidebarSectionTitle(pdf, cv.labels.languages, y)
  y += 5
  cv.languages.forEach((language) => {
    applyText(pdf, '#3f3a34')
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.text(language.name, SIDEBAR_TEXT_X, y)
    applyFill(pdf, tone.languageTrack)
    pdf.roundedRect(SIDEBAR_TEXT_X, y + 1.2, SIDEBAR_TEXT_WIDTH, 2.1, 1, 1, 'F')
    applyFill(pdf, tone.languageFill)
    pdf.roundedRect(
      SIDEBAR_TEXT_X,
      y + 1.2,
      (SIDEBAR_TEXT_WIDTH * language.level) / 100,
      2.1,
      1,
      1,
      'F',
    )
    y += 6.8
  })
}

const drawSidebarContinuation = (pdf: jsPDF, cv: ResolvedCv) => {
  drawSidebarHeader(pdf, cv)
}

const drawSectionHeading = (pdf: jsPDF, label: string, y: number): number => {
  applyText(pdf, '#302d28')
  pdf.setFont('times', 'bold')
  pdf.setFontSize(9.8)
  pdf.text(label.toUpperCase(), MAIN_X, y)
  return y + 4.8
}

const estimateJobHeight = (pdf: jsPDF, job: ResolvedCv['employment'][number]) => {
  const heading = `${job.role}, ${job.company}, ${job.location}`
  const headingHeight = measureWrappedText(pdf, heading, MAIN_WIDTH, 9.8, 4).height
  let height = headingHeight + 3.2

  job.bullets.forEach((bullet) => {
    height += estimateBulletHeight(pdf, bullet.text, bullet.emphasis, MAIN_WIDTH) + 0.5
  })

  height += estimateChipBlockHeight(pdf, job.stack, MAIN_WIDTH) + 1.5
  return height
}

const drawJob = (pdf: jsPDF, job: ResolvedCv['employment'][number], y: number, tone: PaperTone): number => {
  applyText(pdf, '#262422')
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(9.8)
  const heading = `${job.role}, ${job.company}, ${job.location}`
  const headingLines = pdf.splitTextToSize(heading, MAIN_WIDTH) as string[]
  pdf.text(headingLines, MAIN_X, y)
  let cursorY = y + headingLines.length * 4

  applyText(pdf, '#56514a')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8)
  pdf.text(job.dateRange, MAIN_X, cursorY)
  cursorY += 3.7

  applyText(pdf, '#302d29')
  job.bullets.forEach((bullet) => {
    cursorY += drawBullet(pdf, bullet.text, bullet.emphasis, MAIN_X, cursorY, MAIN_WIDTH) + 0.42
  })

  cursorY += drawChips(pdf, job.stack, MAIN_X, cursorY, MAIN_WIDTH, tone) + 1.25
  return cursorY
}

const estimateEducationHeight = (pdf: jsPDF, item: ResolvedCv['education'][number]) => {
  const heading = `${item.degree}, ${item.institution}, ${item.location}`
  const headingHeight = measureWrappedText(pdf, heading, MAIN_WIDTH, 9.6, 3.95).height
  const fieldHeight = item.field ? measureWrappedText(pdf, item.field, MAIN_WIDTH, 8.2, 3.55).height : 0
  return headingHeight + 6.6 + fieldHeight
}

const drawEducation = (pdf: jsPDF, item: ResolvedCv['education'][number], y: number): number => {
  applyText(pdf, '#262422')
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(9.6)
  const heading = `${item.degree}, ${item.institution}, ${item.location}`
  const headingLines = pdf.splitTextToSize(heading, MAIN_WIDTH) as string[]
  pdf.text(headingLines, MAIN_X, y)
  let cursorY = y + headingLines.length * 3.95

  applyText(pdf, '#56514a')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8)
  pdf.text(item.dateRange, MAIN_X, cursorY)
  cursorY += 3.55

  if (item.field) {
    applyText(pdf, '#555048')
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8.2)
    const fieldLines = pdf.splitTextToSize(item.field, MAIN_WIDTH) as string[]
    pdf.text(fieldLines, MAIN_X, cursorY)
    cursorY += fieldLines.length * 3.55
  }

  return cursorY + 1.15
}

export const exportCvToPdf = async (
  cv: ResolvedCv,
  fileName: string,
  tone: PaperTone,
): Promise<void> => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  })

  let pageIndex = 0
  let cursorY = MAIN_TOP

  const addPage = (repeatLabel?: string) => {
    if (pageIndex > 0) {
      pdf.addPage()
    }

    drawPageFrame(pdf, tone)

    if (pageIndex === 0) {
      drawSidebarFull(pdf, cv, tone)
    } else {
      drawSidebarContinuation(pdf, cv)
    }

    cursorY = MAIN_TOP
    if (repeatLabel) {
      cursorY = drawSectionHeading(pdf, repeatLabel, cursorY)
    }
    pageIndex += 1
  }

  addPage()

  cursorY = drawSectionHeading(pdf, cv.labels.summary, cursorY)
  applyText(pdf, '#302d29')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8.7)

  cv.summary.forEach((paragraph) => {
    const measured = measureWrappedText(pdf, paragraph, MAIN_WIDTH, 8.7, 3.95)
    if (cursorY + measured.height > MAIN_BOTTOM) {
      addPage(cv.labels.summary)
    }

    cursorY += drawWrappedText(pdf, paragraph, MAIN_X, cursorY, MAIN_WIDTH, 8.7, 3.95) + 0.75
  })

  cursorY += 2.2
  if (cursorY + 12 > MAIN_BOTTOM) {
    addPage(cv.labels.employment)
  } else {
    cursorY = drawSectionHeading(pdf, cv.labels.employment, cursorY)
  }

  cv.employment.forEach((job) => {
    const estimated = estimateJobHeight(pdf, job)
    if (cursorY + estimated > MAIN_BOTTOM && cursorY > MAIN_TOP + 12) {
      addPage(cv.labels.employment)
    }

    cursorY = drawJob(pdf, job, cursorY, tone)
  })

  cursorY += 2.2
  if (cursorY + 18 > MAIN_BOTTOM) {
    addPage(cv.labels.education)
  } else {
    cursorY = drawSectionHeading(pdf, cv.labels.education, cursorY)
  }

  cv.education.forEach((item) => {
    const estimated = estimateEducationHeight(pdf, item)
    if (cursorY + estimated > MAIN_BOTTOM) {
      addPage(cv.labels.education)
    }

    cursorY = drawEducation(pdf, item, cursorY)
  })

  cursorY += 2.2
  if (cursorY + 12 > MAIN_BOTTOM) {
    addPage(cv.labels.references)
  } else {
    cursorY = drawSectionHeading(pdf, cv.labels.references, cursorY)
  }

  applyText(pdf, '#302d29')
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(8.7)
  drawWrappedText(pdf, cv.labels.referencesText, MAIN_X, cursorY, MAIN_WIDTH, 8.7, 3.95)

  pdf.save(fileName)
}

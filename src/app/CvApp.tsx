import { useMemo, useState } from 'react'
import { resolveCv, type Locale, type ProfileMode } from '../content/cvContent'
import { Sidebar } from '../sections/Sidebar'
import { MainContent } from '../sections/MainContent'
import { Switches } from '../components/Switches'
import { DownloadButton } from '../components/DownloadButton'
import { exportCvToPdf } from '../utils/exportPdf'
import { buildToneCssVars, PAPER_TONES, PAPER_TONE_OPTIONS, type PaperToneId } from '../theme/paperTones'

export const CvApp = () => {
  const [locale, setLocale] = useState<Locale>('en')
  const [profile, setProfile] = useState<ProfileMode>('dotnet')
  const [tone, setTone] = useState<PaperToneId>('linen')
  const [isExporting, setIsExporting] = useState(false)

  const cv = useMemo(() => resolveCv(locale, profile), [locale, profile])
  const toneVars = useMemo(() => buildToneCssVars(tone), [tone])

  const handleDownload = async () => {
    if (isExporting) {
      return
    }

    try {
      setIsExporting(true)
      await exportCvToPdf(
        cv,
        `${cv.person.fullName.replace(/\s+/g, '_')}_${profile}_${locale}.pdf`,
        PAPER_TONES[tone],
      )
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="cv-page" style={toneVars}>
      <div className="floating-tools">
        <Switches
          locale={locale}
          profile={profile}
          languageLabel={cv.labels.languageSwitch}
          profileLabel={cv.labels.profileSwitch}
          toneLabel={cv.labels.toneSwitch}
          tone={tone}
          tones={PAPER_TONE_OPTIONS}
          onLocaleChange={setLocale}
          onProfileChange={setProfile}
          onToneChange={setTone}
        />
        <DownloadButton
          ariaLabel={isExporting ? `${cv.labels.downloadAria}...` : cv.labels.downloadAria}
          onClick={handleDownload}
        />
      </div>

      <div className="cv-sheet" id="cv-document">
        <Sidebar cv={cv} />
        <MainContent cv={cv} />
      </div>
    </div>
  )
}

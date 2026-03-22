import { Fragment, type ReactNode } from 'react'

const escapeRegex = (input: string): string =>
  input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const renderTextWithEmphasis = (
  text: string,
  emphasis: string[] = [],
): ReactNode => {
  if (!emphasis.length) {
    return text
  }

  const uniqueTerms = Array.from(new Set(emphasis.filter(Boolean)))
    .sort((a, b) => b.length - a.length)

  if (!uniqueTerms.length) {
    return text
  }

  const matcher = new RegExp(`(${uniqueTerms.map(escapeRegex).join('|')})`, 'g')
  const parts = text.split(matcher)

  return parts.map((part, index) => {
    if (uniqueTerms.includes(part)) {
      return <strong key={`em-${index}`}>{part}</strong>
    }

    return <Fragment key={`txt-${index}`}>{part}</Fragment>
  })
}

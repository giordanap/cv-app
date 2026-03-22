import type { CSSProperties } from 'react'
import type { Locale, ProfileMode } from '../types/cv'
import type { PaperToneId } from '../theme/paperTones'

interface SwitchesProps {
  locale: Locale
  profile: ProfileMode
  languageLabel: string
  profileLabel: string
  toneLabel: string
  tone: PaperToneId
  tones: { id: PaperToneId; name: string; swatch: string }[]
  onLocaleChange: (locale: Locale) => void
  onProfileChange: (profile: ProfileMode) => void
  onToneChange: (tone: PaperToneId) => void
}

const OptionButton = ({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) => (
  <button
    type="button"
    className={`switch-option ${active ? 'is-active' : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export const Switches = ({
  locale,
  profile,
  languageLabel,
  profileLabel,
  toneLabel,
  tone,
  tones,
  onLocaleChange,
  onProfileChange,
  onToneChange,
}: SwitchesProps) => {
  return (
    <aside className="cv-controls" aria-label="CV controls">
      <div className="switch-group">
        <span>{languageLabel}</span>
        <div className="switch-track">
          <OptionButton active={locale === 'es'} onClick={() => onLocaleChange('es')}>
            ES
          </OptionButton>
          <OptionButton active={locale === 'en'} onClick={() => onLocaleChange('en')}>
            EN
          </OptionButton>
        </div>
      </div>
      <div className="switch-group">
        <span>{profileLabel}</span>
        <div className="switch-track">
          <OptionButton
            active={profile === 'dotnet'}
            onClick={() => onProfileChange('dotnet')}
          >
            .NET
          </OptionButton>
          <OptionButton active={profile === 'node'} onClick={() => onProfileChange('node')}>
            Node
          </OptionButton>
        </div>
      </div>
      <div className="switch-group tone-group">
        <span>{toneLabel}</span>
        <div className="tone-palette" role="radiogroup" aria-label={toneLabel}>
          {tones.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`tone-swatch ${tone === option.id ? 'is-active' : ''}`}
              style={{ '--swatch-color': option.swatch } as CSSProperties}
              role="radio"
              aria-label={option.name}
              aria-checked={tone === option.id}
              onClick={() => onToneChange(option.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

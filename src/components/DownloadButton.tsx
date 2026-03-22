import { DownloadIcon } from './Icons'

interface DownloadButtonProps {
  ariaLabel: string
  onClick: () => void
}

export const DownloadButton = ({ ariaLabel, onClick }: DownloadButtonProps) => (
  <button
    type="button"
    className="download-button"
    aria-label={ariaLabel}
    title={ariaLabel}
    onClick={onClick}
  >
    <DownloadIcon width={16} height={16} />
  </button>
)

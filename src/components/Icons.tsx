import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const MailIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M4 6h16v12H4z" />
    <path d="m4 8 8 6 8-6" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M6.5 3.5h3l1.4 3.4-1.6 1.9a15.5 15.5 0 0 0 5.9 5.9l1.9-1.6 3.4 1.4v3a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 5 5a1.5 1.5 0 0 1 1.5-1.5Z" />
  </svg>
)

export const LinkedInIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M7 9v8" />
    <path d="M7 6v.01" />
    <path d="M12 17v-4a2 2 0 1 1 4 0v4" />
    <path d="M12 9v8" />
    <rect x="3" y="3" width="18" height="18" rx="2" />
  </svg>
)

export const GitHubIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M9 18c-4.5 1.4-4.5-2.5-6-3" />
    <path d="M15 22v-3.9a3.4 3.4 0 0 0-1-2.6c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 5 5 5 0 0 0 19.3 1S18 0.6 15 2.6a13 13 0 0 0-6 0C6 0.6 4.7 1 4.7 1A5 5 0 0 0 4.6 5a5.4 5.4 0 0 0-1.4 3.5c0 5.3 3.5 6.5 6.8 7A3.4 3.4 0 0 0 9 18.1V22" />
  </svg>
)

export const XIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="m4 4 7 9-7 7" />
    <path d="M20 4 9 20" />
    <path d="m13 4 7 9" />
  </svg>
)

export const WhatsAppIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M19.5 4.5A10 10 0 0 0 4.8 17.8L3 21l3.3-1.8A10 10 0 1 0 19.5 4.5Z" />
    <path d="M8.2 9.3c.2-.6.6-.6.8-.6h.7c.2 0 .5 0 .7.5l.6 1.5c.1.2.1.4 0 .5l-.4.5c-.1.1-.2.2-.1.4.3.6 1 1.5 2.2 2.1.2.1.3 0 .4-.1l.5-.6c.1-.1.3-.2.5-.1l1.5.7c.4.2.5.4.5.7v.7c0 .2 0 .6-.5.8-.5.2-1.1.4-1.8.2-1-.2-2.1-.8-3.5-2.1-1.5-1.3-2.2-2.6-2.4-3.6-.1-.7 0-1.3.3-1.7Z" />
  </svg>
)

export const DownloadIcon = (props: IconProps) => (
  <svg {...baseProps} {...props}>
    <path d="M12 4v10" />
    <path d="m8 10 4 4 4-4" />
    <path d="M4 20h16" />
  </svg>
)

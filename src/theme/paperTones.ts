export type PaperToneId =
  | 'linen'
  | 'ivory'
  | 'sand'
  | 'sage'
  | 'alabaster'
  | 'pebble'
  | 'mist'
  | 'oat'

export interface PaperTone {
  id: PaperToneId
  name: string
  swatch: string
  pageBg: string
  sheetBg: string
  sidebarBg: string
  panelBg: string
  panelBorder: string
  chipBg: string
  chipBorder: string
  stackBg: string
  stackBorder: string
  languageTrack: string
  languageFill: string
  controlBg: string
  textPrimary: string
  textSecondary: string
  headingInk: string
  dividerInk: string
  iconInk: string
}

export const PAPER_TONES: Record<PaperToneId, PaperTone> = {
  linen: {
    id: 'linen',
    name: 'Linen',
    swatch: '#f5f2ec',
    pageBg: '#ebe7df',
    sheetBg: '#f5f2ec',
    sidebarBg: '#e2ddd4',
    panelBg: '#d8d0c4',
    panelBorder: '#c7bfb2',
    chipBg: '#f0ece4',
    chipBorder: '#b8b0a2',
    stackBg: '#e8e2d8',
    stackBorder: '#c2b9ad',
    languageTrack: '#c9c1b6',
    languageFill: '#71675a',
    controlBg: 'rgba(245, 242, 236, 0.74)',
    textPrimary: '#262422',
    textSecondary: '#53504c',
    headingInk: '#302d28',
    dividerInk: '#8f8678',
    iconInk: '#3f3a34',
  },
  ivory: {
    id: 'ivory',
    name: 'Ivory',
    swatch: '#f7f2e8',
    pageBg: '#eee7db',
    sheetBg: '#f7f2e8',
    sidebarBg: '#e7dfcf',
    panelBg: '#ddd2c2',
    panelBorder: '#cabfae',
    chipBg: '#f2ece1',
    chipBorder: '#c0b4a4',
    stackBg: '#ece3d7',
    stackBorder: '#cbbfb1',
    languageTrack: '#d1c7bb',
    languageFill: '#726858',
    controlBg: 'rgba(247, 242, 232, 0.76)',
    textPrimary: '#262321',
    textSecondary: '#56514a',
    headingInk: '#322d28',
    dividerInk: '#8f8578',
    iconInk: '#403932',
  },
  sand: {
    id: 'sand',
    name: 'Sand',
    swatch: '#f1ede4',
    pageBg: '#e7e1d5',
    sheetBg: '#f1ede4',
    sidebarBg: '#dcd3c5',
    panelBg: '#d3c8b7',
    panelBorder: '#c1b5a5',
    chipBg: '#ece5d9',
    chipBorder: '#b8ad9c',
    stackBg: '#e4dacc',
    stackBorder: '#c0b3a3',
    languageTrack: '#c8bdaf',
    languageFill: '#6b6256',
    controlBg: 'rgba(241, 237, 228, 0.78)',
    textPrimary: '#262421',
    textSecondary: '#555048',
    headingInk: '#302c27',
    dividerInk: '#8d8376',
    iconInk: '#3d3731',
  },
  sage: {
    id: 'sage',
    name: 'Sage',
    swatch: '#f0f2ec',
    pageBg: '#e5e8df',
    sheetBg: '#f0f2ec',
    sidebarBg: '#d8ddd2',
    panelBg: '#ced6c8',
    panelBorder: '#bcc5b4',
    chipBg: '#e9ede4',
    chipBorder: '#aeb7a8',
    stackBg: '#e0e6dc',
    stackBorder: '#b8c0b2',
    languageTrack: '#c1c8bc',
    languageFill: '#67705f',
    controlBg: 'rgba(240, 242, 236, 0.8)',
    textPrimary: '#232522',
    textSecondary: '#4f544d',
    headingInk: '#2d312c',
    dividerInk: '#7f877e',
    iconInk: '#384036',
  },
  alabaster: {
    id: 'alabaster',
    name: 'Alabaster',
    swatch: '#f8f4ed',
    pageBg: '#efe9de',
    sheetBg: '#f8f4ed',
    sidebarBg: '#e8dfd1',
    panelBg: '#ded2c2',
    panelBorder: '#cabda9',
    chipBg: '#f3ece0',
    chipBorder: '#c2b4a0',
    stackBg: '#ece2d5',
    stackBorder: '#c8b8a4',
    languageTrack: '#d3c8ba',
    languageFill: '#776a5a',
    controlBg: 'rgba(248, 244, 237, 0.8)',
    textPrimary: '#262320',
    textSecondary: '#5a5249',
    headingInk: '#342e27',
    dividerInk: '#94887a',
    iconInk: '#453d34',
  },
  pebble: {
    id: 'pebble',
    name: 'Pebble',
    swatch: '#f2f0ea',
    pageBg: '#e8e5dd',
    sheetBg: '#f2f0ea',
    sidebarBg: '#dddad0',
    panelBg: '#d2cfc5',
    panelBorder: '#beb9ae',
    chipBg: '#ece9e2',
    chipBorder: '#b3aea2',
    stackBg: '#e3dfd6',
    stackBorder: '#bbb5a9',
    languageTrack: '#c9c5bc',
    languageFill: '#6c6860',
    controlBg: 'rgba(242, 240, 234, 0.8)',
    textPrimary: '#252420',
    textSecondary: '#52514c',
    headingInk: '#2f2e29',
    dividerInk: '#868379',
    iconInk: '#3c3a34',
  },
  mist: {
    id: 'mist',
    name: 'Mist',
    swatch: '#f1f3f0',
    pageBg: '#e6e9e4',
    sheetBg: '#f1f3f0',
    sidebarBg: '#d9ded6',
    panelBg: '#ced5cd',
    panelBorder: '#bac3b8',
    chipBg: '#e8ede7',
    chipBorder: '#aeb7ac',
    stackBg: '#dfe6de',
    stackBorder: '#b7bfb4',
    languageTrack: '#c1c8bf',
    languageFill: '#646d63',
    controlBg: 'rgba(241, 243, 240, 0.82)',
    textPrimary: '#222521',
    textSecondary: '#4f554e',
    headingInk: '#2d322d',
    dividerInk: '#7f887e',
    iconInk: '#394039',
  },
  oat: {
    id: 'oat',
    name: 'Oat',
    swatch: '#f4f1e8',
    pageBg: '#e9e4d8',
    sheetBg: '#f4f1e8',
    sidebarBg: '#ded7c8',
    panelBg: '#d4ccb9',
    panelBorder: '#c0b8a5',
    chipBg: '#ece7db',
    chipBorder: '#b7af9d',
    stackBg: '#e5dece',
    stackBorder: '#bdb29f',
    languageTrack: '#c9c1af',
    languageFill: '#6f6658',
    controlBg: 'rgba(244, 241, 232, 0.82)',
    textPrimary: '#26231f',
    textSecondary: '#565049',
    headingInk: '#312d27',
    dividerInk: '#8b8376',
    iconInk: '#403a32',
  },
}

export const PAPER_TONE_OPTIONS = Object.values(PAPER_TONES)

export const buildToneCssVars = (toneId: PaperToneId): Record<string, string> => {
  const tone = PAPER_TONES[toneId]

  return {
    '--page-bg': tone.pageBg,
    '--sheet-bg': tone.sheetBg,
    '--sidebar-bg': tone.sidebarBg,
    '--panel-bg': tone.panelBg,
    '--panel-border': tone.panelBorder,
    '--chip-bg': tone.chipBg,
    '--chip-border': tone.chipBorder,
    '--stack-bg': tone.stackBg,
    '--stack-border': tone.stackBorder,
    '--language-track': tone.languageTrack,
    '--language-fill': tone.languageFill,
    '--control-bg': tone.controlBg,
    '--text-primary': tone.textPrimary,
    '--text-secondary': tone.textSecondary,
    '--heading-ink': tone.headingInk,
    '--divider-ink': tone.dividerInk,
    '--icon-ink': tone.iconInk,
  }
}
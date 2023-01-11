export type FooterTheme = 'light' | 'dark' | FooterCustomTheme;

export enum FooterVariant {
  Base = 'base',
  Navigation = 'navigation',
  Utility = 'utility',
}

export interface FooterCustomTheme {
  '--footer-background'?: string;
  '--footer-color'?: string;
  '--footer-divider-color'?: string;
  '--footer-focus-outline-color'?: string;
}

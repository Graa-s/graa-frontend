export enum ThemeName {
  Light = 'light',
  Dark = 'dark',
}

type Theme = {
  themeName: ThemeName,
  /** @units css border property */
  border: string;
  /** @units px */
  borderRadius: number;
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  /** @units ms */
  transitionDuration: number;
};

export default Theme;

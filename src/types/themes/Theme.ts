export enum ThemeName {
  Light = 'light',
  Dark = 'dark',
}

export type MediaQueryBreakpoints = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type Theme = {
  themeName: ThemeName,
  /** @units px */
  breakpoints: Record<MediaQueryBreakpoints, number>,
  /** @units css border property */
  border: string;
  /** @units px */
  borderRadius: number;
  blurredBackgroundColor: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  hintColor: string;
  /** @units ms */
  transitionDuration: number;
  /**
   * @param properties css properties
   * @param duration transition duration in ms
   * @param timingFn transition timing function
   * @return css transition property
   */
  transition: (
    properties: string | string[],
    duration: Theme['transitionDuration'],
    timingFn: string
  ) => string;
  scrollbarThumbColor: string;
};

export default Theme;

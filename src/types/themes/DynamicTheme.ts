import Theme from 'types/themes/Theme.ts';

export type DynamicThemeProperties =
  'themeName' |
  'border' |
  'backgroundColor' |
  'blurredBackgroundColor' |
  'hoverBackgroundColor' |
  'color' |
  'hintColor' |
  'scrollbarThumbColor';

type DynamicTheme = Pick<Theme, DynamicThemeProperties>;

export default DynamicTheme;

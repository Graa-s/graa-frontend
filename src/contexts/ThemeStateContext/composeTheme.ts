import { immutableTheme, lightTheme, darkTheme } from 'constants/themes';
import { DynamicTheme, Theme, ThemeName } from 'types/themes';

function composeTheme(themeName: ThemeName, overrides?: Partial<Theme>): Theme {
  let dynamicTheme: DynamicTheme;

  if (themeName === ThemeName.Dark) dynamicTheme = darkTheme;
  else dynamicTheme = lightTheme;

  return { ...immutableTheme, ...dynamicTheme, ...overrides };
}

export default composeTheme;

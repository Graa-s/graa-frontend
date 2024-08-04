import { immutableTheme, lightTheme, darkTheme } from 'constants/themes';
import { DynamicTheme, Theme, ThemeName } from 'types/themes';

function setTheme(themeName: ThemeName): Theme {
  let dynamicTheme: DynamicTheme | null = null;

  if (themeName === ThemeName.Light) dynamicTheme = lightTheme;
  if (themeName === ThemeName.Dark) dynamicTheme = darkTheme;

  return Object.assign({}, immutableTheme, dynamicTheme);
}

export default setTheme;

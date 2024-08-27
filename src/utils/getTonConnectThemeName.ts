import { THEME } from '@tonconnect/ui-react';
import { ThemeName } from 'types/themes';

function getTonConnectThemeName(theme: ThemeName) {
  if (theme === ThemeName.Light) return THEME.LIGHT;
  if (theme === ThemeName.Dark) return THEME.DARK;
}

export default getTonConnectThemeName;

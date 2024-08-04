import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeStateContext from './ThemeStateContext';
import setTheme from './setTheme';
import { ThemeName, type Theme } from 'types/themes';
import type { PropsWithChildren } from 'react';

function ThemeStateProvider({ children, ...props }: PropsWithChildren) {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = setTheme(isDark ? ThemeName.Dark : ThemeName.Light);

  const [themeState, setThemeState] = useState<Theme>(initialTheme);

  return <ThemeStateContext.Provider {...props} value={{ themeState, setThemeState }}>
    <ThemeProvider theme={themeState}>
      {children}
    </ThemeProvider>
  </ThemeStateContext.Provider>;
}

export default ThemeStateProvider;

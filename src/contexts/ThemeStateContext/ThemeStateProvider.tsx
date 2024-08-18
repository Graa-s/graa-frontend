import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeStateContext from './ThemeStateContext';
import setTheme from './setTheme';
import { ThemeName, type Theme } from 'types/themes';
import type { PropsWithChildren } from 'react';

function ThemeStateProvider({ children, ...props }: PropsWithChildren) {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialThemeName = ThemeName[isDark ? 'Dark' : 'Light'];
  const initialTheme = setTheme(initialThemeName, { transitionDuration: 0 });

  const [themeState, setThemeState] = useState<Theme>(initialTheme);

  useEffect(() => {
    setThemeState(setTheme(initialThemeName));
  }, []); // eslint-disable-line

  return (
    <ThemeStateContext.Provider {...props} value={{ themeState, setThemeState }}>
      <ThemeProvider theme={themeState}>
        {children}
      </ThemeProvider>
    </ThemeStateContext.Provider>
  );
}

export default ThemeStateProvider;

import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeStateContext from './ThemeStateContext';
import composeTheme from './composeTheme.ts';
import { ThemeName, type Theme } from 'types/themes';
import type { PropsWithChildren } from 'react';

function ThemeStateProvider({ children, ...props }: PropsWithChildren) {
  const isSystemDark = matchMedia('(prefers-color-scheme: dark)').matches;
  const systemThemeName = ThemeName[isSystemDark ? 'Dark' : 'Light'];

  if (!localStorage.getItem('theme')) localStorage.setItem('theme', systemThemeName);

  const initialThemeName = localStorage.getItem('theme') as ThemeName;
  const initialTheme = composeTheme(initialThemeName, { transitionDuration: 0 });

  const [themeState, setThemeState] = useState<Theme>(initialTheme);

  useEffect(() => {
    setThemeState(composeTheme(initialThemeName));
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

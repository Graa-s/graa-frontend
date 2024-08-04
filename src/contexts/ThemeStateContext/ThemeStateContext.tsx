import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { Theme } from 'types/themes';

export type ThemeStateContextType = {
  themeState: Theme,
  setThemeState: Dispatch<SetStateAction<Theme>>,
};

const ThemeStateContext = createContext<ThemeStateContextType | null>(null);

export default ThemeStateContext;

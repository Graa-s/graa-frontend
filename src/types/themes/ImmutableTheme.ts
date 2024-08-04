import { Theme } from 'types/themes';
import { DynamicThemeProperties } from './DynamicTheme';

type ImmutableTheme = Omit<Theme, DynamicThemeProperties>;

export default ImmutableTheme;

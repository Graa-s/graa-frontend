import { ImmutableTheme } from 'types/themes';
import transition from './functions/transition';

const immutableTheme: ImmutableTheme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
  borderRadius: 12,
  transitionDuration: 200,
  transition,
};

export default immutableTheme;

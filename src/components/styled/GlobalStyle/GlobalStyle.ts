import { createGlobalStyle } from 'styled-components';
import scrollbar from './scrollbar';
import autoClamp from 'components/styled/utils/autoClamp.ts';

export default createGlobalStyle`
  ${scrollbar}
    /**/
  :root {
    font-family: 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${autoClamp(14, 16)};
    letter-spacing: -0.3px;
    font-synthesis: none;
    color-scheme: light dark;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    transition: ${props => props.theme.transition(['background-color', 'color'])};
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

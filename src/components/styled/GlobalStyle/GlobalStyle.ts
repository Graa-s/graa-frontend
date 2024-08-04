import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import scrollbar from './scrollbar';

export default createGlobalStyle`
  ${fonts}
  ${scrollbar}
    /**/
  :root {
    font-family: 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: -0.3px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, :after, :before {
    box-sizing: border-box;
    transition: all ${props => props.theme.transitionTimeout + 1000}ms ease-in-out;
  }

  body, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
  
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color}
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

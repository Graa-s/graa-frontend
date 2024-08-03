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
    //color-scheme: light dark;
    font-synthesis: none;
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

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (prefers-color-scheme: light) {
    //:root {
    //  color: #213547;
    //  background-color: #ffffff;
    //}
    //
    //a:hover {
    //  color: #747bff;
    //}
    //
    //button {
    //  background-color: #f9f9f9;
    //}
  }
`;

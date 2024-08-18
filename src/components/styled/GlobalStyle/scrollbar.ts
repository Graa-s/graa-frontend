import { css } from 'styled-components';

export default css`
  @supports (-moz-appearance: none) {
    *, :after, :before {
      scrollbar-width: thin;
      scrollbar-color: ${props => props.theme.scrollbarThumbColor} transparent;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.scrollbarThumbColor};
  }
`;

import { css } from 'styled-components';

export default css`
  @supports (-moz-appearance: none) {
    *,
    :after,
    :before {
      scrollbar-color: ${props => props.theme.scrollbarThumbColor} transparent;
      scrollbar-width: thin;
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

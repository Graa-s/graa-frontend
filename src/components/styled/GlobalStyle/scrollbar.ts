import { css } from 'styled-components';

export default css`
  @supports (-moz-appearance: none) {
    *,
    :after,
    :before {
      scrollbar-color: #D9D9D9 transparent;
      scrollbar-width: thin;
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #D9D9D9;
  }
`;

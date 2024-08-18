import { css } from 'styled-components';
import { autoClamp } from 'components/styled/utils';

export default css`
  max-width: 1920px;
  margin: 0 auto;
  padding-inline: ${autoClamp(15, 53)};
`;

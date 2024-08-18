import { css } from 'styled-components';
import { autoClamp } from 'components/styled/utils';

export default css`
  display: flex;
  gap: ${autoClamp(10, 20)};
`;

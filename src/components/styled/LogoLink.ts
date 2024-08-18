import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { autoClamp } from 'components/styled/utils';

export default styled(Link)`
  width: fit-content;
  display: inline-block;
  padding-block: 8px;
  font-size: ${autoClamp(20, 24)};
  font-weight: 800;
  color: #007AFF;
  text-decoration: none;
`;

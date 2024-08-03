import styled from 'styled-components';
import { border, borderRadius } from 'constants/styled';

export default styled.input`
  border-radius: ${borderRadius}px;
  border: ${border};
  font: inherit;
  letter-spacing: inherit;

  &::placeholder {
    color: #55555580;
  }
`;

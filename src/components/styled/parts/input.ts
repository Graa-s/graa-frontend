import { css } from 'styled-components';
import { autoClamp } from 'components/styled/utils';

export default css`
  padding-inline: 10px;
  padding-block: ${autoClamp(10.3, 15)};
  border-radius: ${props => props.theme.borderRadius}px;
  border: ${props => props.theme.border};
  background: inherit;
  font: inherit;
  font-weight: 500;
  color: inherit;
  letter-spacing: inherit;
  transition: ${props => props.theme.transition('border')};
  
  &::placeholder {
    color: ${props => props.theme.hintColor};
    transition: ${props => props.theme.transition('color')};
  }
`;

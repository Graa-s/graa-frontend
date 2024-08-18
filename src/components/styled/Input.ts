import styled from 'styled-components';

export default styled.input`
  border-radius: ${props => props.theme.borderRadius}px;
  border: ${props => props.theme.border};
  font: inherit;
  letter-spacing: inherit;
  background: inherit;
  transition: ${props => props.theme.transition('border')};

  &::placeholder {
    color: #55555580;
  }
`;

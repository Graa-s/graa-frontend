import styled from 'styled-components';

export default styled.div`
  border: 1px solid #0000000D;
  border-radius: ${props => props.theme.borderRadius}px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: 0 4px 50px 0 #00000040;
  transition: ${props => props.theme.transition('background-color')};
`;

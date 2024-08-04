import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-inline: 53px;
  height: 90px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: ${props => props.theme.border};
`;

export const Logo = styled.h1`
  margin: 0 auto 0 0;
`;

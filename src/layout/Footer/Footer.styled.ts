import styled from 'styled-components';
import { container } from 'components/styled/parts';
import { autoClamp } from 'components/styled/utils';

export const StyledFooter = styled.footer`
  margin-top: ${autoClamp(50, 110)};
  border-top: ${props => props.theme.border};
  transition: ${props => props.theme.transition('border')};
`;

export const FooterContainer = styled.div`
  ${container};
  padding-top: ${autoClamp(13, 27)};
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    display: block;
  }
`;

export const FooterText = styled.p`
  margin-top: 12px;
  max-width: 642px;
  font-weight: 500;
  color: #63707D;
`;

export const Social = styled.ul`
  grid-column: 2;
  grid-row: 1 / span 3;
  margin-top: ${autoClamp(15, 36)};
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    margin-bottom: 20px;
  }
`;

export const FooterCopyright = styled.div`
  ${container};
  padding-block: ${autoClamp(20, 35)};
  display: flex;
  align-items: center;
  color: #63707D;
  border-top: ${props => props.theme.border};
  border-width: 0;

  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    justify-content: space-between;
    border-top: ${props => props.theme.border};
    transition: ${props => props.theme.transition('border')};
  }
`;

export const TonReference = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

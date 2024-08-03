import styled from 'styled-components';
import { border } from 'constants/styled';

export const StyledFooter = styled.footer`
  margin-top: 110px;
  padding: 27px 53px 35px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  border-top: ${border};
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
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterCopyright = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  color: #63707D;
`;

export const TonReference = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

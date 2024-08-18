import styled from 'styled-components';
import { container, flexSpacing } from 'components/styled/parts';
import { autoClamp } from 'components/styled/utils';

export const StyledHeader = styled.header`
  border-bottom: ${props => props.theme.border};
  transition: ${props => props.theme.transition('border')};
`;

export const HeaderContainer = styled.div`
  ${container};
  height: ${autoClamp(80, 90)};
  ${flexSpacing};
  align-items: center;
`;

export const Logo = styled.h1`
  margin: 0 auto 0 0;
`;

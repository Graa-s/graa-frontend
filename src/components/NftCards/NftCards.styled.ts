import styled, { css } from 'styled-components';
import { List } from 'components';
import { flexSpacing } from 'components/styled/parts';
import { autoClamp } from 'components/styled/utils';

export const CardsList = styled.ul`
  margin-top: ${autoClamp(20, 35)};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
  gap: 10px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

export const Toolbar = styled.div`
  margin-top: ${autoClamp(20, 35)};
  ${flexSpacing};
  align-items: center;
`;

export const Heading = styled.h2`
  margin-right: auto;
  font-size: ${autoClamp(20, 30)};
  font-weight: 700;
`;

export const SortItem = styled(List.ItemInner).attrs<{ $active?: boolean, href?: string }>({
  as: 'a',
  href: '',
  $clickable: true,
})`
  ${props => props.$active && css`
    color: red;
  `}
`;

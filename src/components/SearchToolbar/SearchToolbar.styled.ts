import styled from 'styled-components';
import { SearchInput, Button } from 'components';

export type SearchInputWrapperProps = {
  $collapseWidth: number;
  $open: boolean;
}

export const SearchInputWrapper = styled(SearchInput).attrs<SearchInputWrapperProps>(
  props => ({ block: props.$open, ...props }),
)`
  @media (max-width: ${props => props.$collapseWidth}px) {
    ${props => !props.$open && 'display: none'};
  }
`;

export const CollapsedSearchButton = styled(Button)<{ $visibleWidth: number }>`
  @media (min-width: ${props => props.$visibleWidth + 1}px) {
    display: none;
  }
`;

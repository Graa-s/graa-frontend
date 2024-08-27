import styled from 'styled-components';
import { Input } from 'components/styled';
import { SearchIcon } from 'assets/icons';
import { autoClamp } from 'components/styled/utils';

export type SearchInputWrapperProps = {
  $width?: number;
  $block?: boolean;
};

export const SearchInputWrapper = styled.div<SearchInputWrapperProps>`
  position: relative;
  ${props => props.$width && `width: ${props.$width}px`};
  ${props => props.$block && 'width: 100%'};
`;

export const StyledSearchInput = styled(Input)`
  padding-left: 43px;
  width: 100%;
`;

export const SearchInputIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: ${autoClamp(20, 10)};
  transform: translateY(-50%);
  width: ${autoClamp(19, 28)};
  height: ${autoClamp(19, 28)};
  display: inline-block;
  pointer-events: none;
  color: ${props => props.theme.hintColor};
  transition: ${props => props.theme.transition('color')};
`;

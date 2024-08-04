import styled from 'styled-components';
import { Input } from 'components/styled';
import { SearchIcon } from 'assets/icons';

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const StyledSearchInput = styled(Input)<{ $width?: number }>`
  padding: 15px 10px 15px 43px;
  ${(props) => props.$width && `width: ${props.$width}px;`}
  font-size: 16px;
  font-weight: 500;
  color: inherit;
  
  &::placeholder {
    color: ${props => props.theme.hintColor};
  }
`;

export const SearchInputIcon = styled(SearchIcon)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 28px;
  height: 28px;
  display: inline-block;
  pointer-events: none;
  color: ${props => props.theme.hintColor};
`;

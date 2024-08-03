import { StyledSearchInput, SearchInputIcon, SearchInputWrapper } from './SearchInput.styled';
import type { InputHTMLAttributes } from 'react';

export type Props = { $width?: number } & InputHTMLAttributes<HTMLInputElement>;

function SearchInput(props: Props) {
  return <SearchInputWrapper>
    <StyledSearchInput {...props} />
    <SearchInputIcon />
  </SearchInputWrapper>;
}

export default SearchInput;

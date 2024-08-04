import { SearchInputWrapper, SearchInputIcon, StyledSearchInput } from './SearchInput.styled';
import type { InputHTMLAttributes } from 'react';

export type Props = { $width?: number } & InputHTMLAttributes<HTMLInputElement>;

function SearchInput(props: Props) {
  return <SearchInputWrapper>
    <SearchInputIcon width={28} height={28} />
    <StyledSearchInput {...props} />
  </SearchInputWrapper>;
}

export default SearchInput;

import { SearchInputWrapper, SearchInputIcon, StyledSearchInput } from './SearchInput.styled';
import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

export type Props = {
  /** @units px */
  width?: number;
  /** set width to 100% */
  block?: boolean;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
};

function SearchInput(props: Props, ref: ForwardedRef<HTMLDivElement>) {
  const {
    width,
    block,
    inputAttributes,
    ...restProps
  } = props;

  return (
    <SearchInputWrapper
      ref={ref}
      $width={width}
      $block={block}
      {...restProps}
    >
      <SearchInputIcon width={28} height={28} />
      <StyledSearchInput {...inputAttributes} />
    </SearchInputWrapper>
  );
}

export default forwardRef(SearchInput);

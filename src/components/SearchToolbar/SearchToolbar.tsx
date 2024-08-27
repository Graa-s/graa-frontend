import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'hooks';
import { SearchInputWrapper, CollapsedSearchButton } from './SearchToolbar.styled';
import { CrossIcon, SearchIcon } from 'assets/icons';
import type { ReactNode } from 'react';
import type { SearchInputProps } from 'components';

export type Props = {
  /**
   *  @units vw
   *  @default 1200
   */
  collapseWidth?: number;
  leftCollapsibleContent?: ReactNode;
  rightCollapsibleContent?: ReactNode;
  searchWidth?: SearchInputProps['width'];
} & Omit<SearchInputProps, 'width'>;

function SearchToolbar(props: Props) {
  const {
    collapseWidth = 1200,
    leftCollapsibleContent,
    rightCollapsibleContent,
    searchWidth,
    ...restProps
  } = props;

  const isWideScreen = useMediaQuery(`(min-width: ${collapseWidth}px)`);
  const [open, setOpen] = useState(isWideScreen);

  useLayoutEffect(() => {
    setOpen(false);
  }, [isWideScreen]);

  function handleSwitchSearch() {
    setOpen(prevState => !prevState);
  }

  return (
    <>
      {!open && leftCollapsibleContent}

      <SearchInputWrapper
        $collapseWidth={collapseWidth}
        $open={open}
        width={searchWidth}
        {...restProps}
      />

      <CollapsedSearchButton
        $visibleWidth={collapseWidth}
        icon={open ? <CrossIcon /> : <SearchIcon />}
        onClick={handleSwitchSearch}
      />

      {!open && rightCollapsibleContent}
    </>
  );
}

export default SearchToolbar;

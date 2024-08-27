import { Button, DropdownFromButton, List, SearchToolbar } from 'components';
import NftCard from './NftCard';
import NftCardSkeleton from 'components/NftCards/NftCard/NftCardSkeleton/NftCardSkeleton.tsx';
import { useTheme } from 'styled-components';
import { useImagePreload, useMediaQuery } from 'hooks';
import { CardsList, Heading, SortItem, Toolbar } from './NftCards.styled';
import { FlipIcon, ViewIcon } from 'assets/icons';
import type { MouseEvent } from 'react';
import type Nft from 'types/Nft';

export type Props = { items: Nft[] };

function NftCards(props: Props) {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  function handleSortClick (event: MouseEvent, type: 'asc' | 'desc') {
    event.preventDefault();
    // TODO
    type;
  }

  const imagesPreloaded = useImagePreload(props.items.map(item => item.image));

  const dropdownButton = <Button icon={<ViewIcon />}>{isWideScreen && 'Sort'}</Button>;

  const toolbarButtons = (
    <>
      <DropdownFromButton button={dropdownButton}>
        <List>
          <SortItem onClick={event => handleSortClick(event, 'asc')}>
            Price: Low to High
          </SortItem>

          <List.ItemInner
            as="a"
            href=""
            onClick={event => handleSortClick(event, 'desc')}
            $clickable
          >
            Price: High to Low
          </List.ItemInner>
        </List>
      </DropdownFromButton>

      <Button icon={<FlipIcon />}>{isWideScreen && 'Refresh metadata'}</Button>
    </>
  );

  return (
    <>
      <Toolbar>
        <SearchToolbar
          searchWidth={400}
          inputAttributes={{ placeholder: 'Name or description' }}
          leftCollapsibleContent={<Heading>9999 items</Heading>}
          rightCollapsibleContent={toolbarButtons}
        />
      </Toolbar>

      <CardsList>
        {imagesPreloaded && imagesPreloaded && props.items?.map((nft, key) => nft.address && (
          <li key={key}><NftCard {...nft} /></li>
        ))}

        {!imagesPreloaded && Array(20).fill(null).map((_, key) => (
          <li key={key}><NftCardSkeleton /></li>
        ))}
      </CardsList>
    </>
  );
}

export default NftCards;

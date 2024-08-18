import NftCard from './NftCard';
import { CardsList, DropdownItem, DropdownLink, Heading, Toolbar } from './NftCards.styled';
import { Button, DropdownFromButton, SearchToolbar } from 'components';
import { useTheme } from 'styled-components';
import { useMediaQuery } from 'hooks';
import { FlipIcon, ViewIcon } from 'assets/icons';
import type Nft from 'types/Nft';

export type Props = { items: Nft[] };

function NftCards(props: Props) {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  const dropdownButton = <Button icon={<ViewIcon />}>{isWideScreen && 'Sort'}</Button>;

  const toolbarButtons = <>
    <DropdownFromButton button={dropdownButton}>
      <ul>
        <DropdownItem>
          <DropdownLink href="#">Price: Low to High</DropdownLink>
        </DropdownItem>
        <DropdownItem>
          <DropdownLink href="#">Price: High to Low</DropdownLink>
        </DropdownItem>
      </ul>
    </DropdownFromButton>

    <Button icon={<FlipIcon />}>{isWideScreen && 'Refresh metadata'}</Button>
  </>;

  return (
    <>
      <Toolbar>
        <SearchToolbar
          width={400}
          inputAttributes={{ placeholder: 'Name or description' }}
          leftCollapsibleContent={<Heading>9999 items</Heading>}
          rightCollapsibleContent={toolbarButtons}
        />
      </Toolbar>

      <CardsList>
        {props.items?.map((nft, key) => nft.address && <li key={key}><NftCard {...nft} /></li>)}
      </CardsList>
    </>
  );
}

export default NftCards;

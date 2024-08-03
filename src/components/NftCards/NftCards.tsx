import { DropdownFromButton, SearchInput } from 'components';
import NftCard from './NftCard';
import { Button } from 'components/styled';
import { CardsList, DropdownItem, DropdownLink, Heading, Toolbar } from './NftCards.styled';
import { flipIcon, viewIcon } from 'assets/icons';
import type Nft from 'types/Nft';

export type Props = { items: Nft[] };

function NftCards(props: Props) {
  return <>
    <Toolbar>
      <Heading>21 items</Heading>
      <SearchInput $width={400} placeholder="Name or description" />

      <DropdownFromButton buttonProps={{
        $icon: viewIcon,
        children: 'Sort',
      }}>
        <ul>
          <DropdownItem>
            <DropdownLink href="#">Price: Low to High</DropdownLink>
          </DropdownItem>
          <DropdownItem>
            <DropdownLink href="#">Price: High to Low</DropdownLink>
          </DropdownItem>
        </ul>
      </DropdownFromButton>

      <Button $icon={flipIcon}>Refresh metadata</Button>
    </Toolbar>

    <CardsList>
      {props.items?.map((nft, key) => nft.address && <li key={key}><NftCard {...nft} /></li>)}
    </CardsList>
  </>;
}

export default NftCards;

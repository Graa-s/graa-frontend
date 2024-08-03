import { Footer, Header } from 'layout';
import { NftCards } from 'components';
import CollectionInfo from 'components/CollectionInfo';
import type Nft from 'types/Nft';

const sampleItem: Nft = {
  address: 'EQBVseTUbsrVLLebSBj3tEGmzSvqjKZ9sr5P_WwErXSH0q_1',
  name: '+888 0604 7493',
  description: 'The anonymous number +888 0721 6963 that can ...',
  image: 'https://picsum.photos/600/600',
  price: 20,
  verified: true,
};

const items: Nft[] = Array(9).fill(sampleItem);

function Collection() {
  return <>
    <Header />
    <CollectionInfo />
    <NftCards items={items} />
    <Footer />
  </>;
}

export default Collection;

import { Wrapper, NftImage, NftName, NftDescriptionLine } from './NftCardSkeleton.styled';

function NftCardSkeleton() {
  return (
    <Wrapper>
      <NftImage />
      <NftName />
      <NftDescriptionLine />
      <NftDescriptionLine $width="78%" />
    </Wrapper>
  );
}

export default NftCardSkeleton;

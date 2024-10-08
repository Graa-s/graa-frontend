import {
  CollectionImage, NameWrapper,
  Name, Description, StyledInfo, Main, CollectionProperties,
} from './CollectionInfo.styled';
import { VerifiedIcon } from 'components/styled';
import { PropertyTitle, PropertyValue } from 'components/Property';
import { TonIcon } from 'assets/icons';
import { shortenAddress } from 'utils';

function CollectionInfo() {
  return (
    <StyledInfo>
      <CollectionImage src="https://picsum.photos/86/86" width={86} height={86} />

      <Main>
        <NameWrapper>
          <Name>Anonymous Telegram Numbers</Name>
          <VerifiedIcon />
        </NameWrapper>

        <Description>These anonymous numbers can be used to create Telegram accounts that are not tied
          to SIM cards.</Description>
      </Main>

      <CollectionProperties>
        <li>
          <PropertyTitle>Owner</PropertyTitle>
          <PropertyValue>{shortenAddress('EQAAhxl3')}</PropertyValue>
        </li>
        <li>
          <PropertyTitle>Address collection</PropertyTitle>
          <PropertyValue>{shortenAddress('EQAAhxl3')}</PropertyValue>
        </li>
        <li>
          <PropertyTitle>Floor price</PropertyTitle>
          <PropertyValue>
            <TonIcon />&nbsp;
            <span>1K</span>
          </PropertyValue>
        </li>
      </CollectionProperties>
    </StyledInfo>
  );
}

export default CollectionInfo;

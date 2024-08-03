import { Link } from 'react-router-dom';
import { Footer, Header } from 'layout';
import {
  Content, ImageWrapper, NftImage,
  NftBadge, NftInfo, SaleStatusWrapper,
  SaleStatus, NftMain, NftNameWrapper,
  ActionButtonWrapper, PropertiesTitle,
  PropertiesList,
} from './Nft.styled';
import { Button, VerifiedIcon } from 'components/styled';
import { shareIcon, plusIcon, TonIcon } from 'assets/icons';
import Property from 'components/Property';

function Nft() {
  // ToDo
  const saleStatusText: string = 'For sale';
  const actionButtonText: string = 'Put on sale';

  const currentUrlToClipboard = () => {
    return navigator.clipboard.writeText(window.location.href);
  };

  return <>
    <Header />

    <Content>
      <ImageWrapper>
        <NftImage src={'https://picsum.photos/600/600'} width={600} height={600} alt="" />
        <NftBadge>
          <TonIcon />
          <span>20 ≈ 2.000$</span>
        </NftBadge>
      </ImageWrapper>

      <NftInfo>
        <SaleStatusWrapper>
          <SaleStatus>{saleStatusText}</SaleStatus>
          {<Button $icon={shareIcon} onClick={currentUrlToClipboard} />}
        </SaleStatusWrapper>

        <NftMain>
          <NftNameWrapper>
            <span>GRAM Member #2241</span>
            <VerifiedIcon />
          </NftNameWrapper>
        </NftMain>

        <ActionButtonWrapper>
          <Button $variant="colored" $icon={plusIcon} $block>{actionButtonText}</Button>
        </ActionButtonWrapper>

        <Property as={Link} to="/" title="Owner" subtitle="EQAA..hxl3" icon/>

        {<>
          <PropertiesTitle>Properties</PropertiesTitle>
          <PropertiesList>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
            <li><Property title="Appearance" subtitle="Golden Beak" /></li>
          </PropertiesList>
        </>}
      </NftInfo>
    </Content>

    <Footer />
  </>;
}

export default Nft;

import { Link } from 'react-router-dom';
import { Footer, Header } from 'layout';
import { Button, Property } from 'components';
import {
  Content, ImageWrapper, NftImage,
  NftBadge, NftInfo, SaleStatusWrapper,
  SaleStatus, NftMain, NftNameWrapper,
  ActionButtonWrapper, PropertiesTitle,
  PropertiesList,
} from './Nft.styled';
import { VerifiedIcon } from 'components/styled';
import { ShareIcon, PlusIcon, TonIcon } from 'assets/icons';

function Nft() {
  // ToDo from backend
  const saleStatusText: string = 'On sale';
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
          {<Button icon={<ShareIcon />} onClick={currentUrlToClipboard} />}
        </SaleStatusWrapper>

        <NftMain>
          <NftNameWrapper>
            <span>GRAM Member #2241</span>
            <VerifiedIcon />
          </NftNameWrapper>
        </NftMain>

        <ActionButtonWrapper>
          <Button $variant="colored" icon={<PlusIcon />} $block>{actionButtonText}</Button>
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

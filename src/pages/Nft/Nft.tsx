import { useState } from 'react';
import { useImagePreload } from 'hooks';
import { Link } from 'react-router-dom';
import { Footer, Header } from 'layout';
import { Button, FormItem, Modal, Property, Select } from 'components';
import {
  ActionButtonWrapper, CollectionImage, CollectionName,
  CollectionWrapper, Content, ImageContainer, ImageWrapper,
  NftBadge, NftImage, NftInfo, NftMain, NftNameWrapper,
  PropertiesList, PropertiesTitle, SaleStatus, SaleStatusWrapper,
} from './Nft.styled';
import { VerifiedIcon } from 'components/styled';
import { ArrowIcon, PlusIcon, ShareIcon } from 'assets/icons';
import { shortenAddress } from 'utils';
import { ButtonColor, ButtonVariant } from 'components/Button/types';
import duckIcon from 'assets/duck-logo.gif';

function Nft() {
  const [openedModal, setOpenedModal] = useState<boolean>(false);

  // ToDo from backend
  const saleStatusText: string = 'On sale';
  const actionButtonText: string = 'Put on sale';

  const currentUrlToClipboard = () => {
    return navigator.clipboard.writeText(window.location.href);
  };

  const imageSrc = 'https://picsum.photos/600/600';
  const imagePreloaded = useImagePreload(imageSrc);

  return (
    <>
      <Header />

      <Content>
        <ImageContainer>
          {imagePreloaded && (
            <ImageWrapper>
              <NftImage src={imageSrc} width="600" height="600" alt="" />
              <NftBadge>
                {/*<TonIcon />*/}
                <img src={duckIcon} width={26} />
                <span>20 ≈ 2.000$</span>
              </NftBadge>
            </ImageWrapper>
          )}
        </ImageContainer>

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

            <CollectionWrapper to={'/'}>
              <CollectionImage $icon={'https://picsum.photos/35/35'} />
              <CollectionName>Ton market maker club</CollectionName>
              <ArrowIcon />
            </CollectionWrapper>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
          </NftMain>

          <ActionButtonWrapper>
            <Button
              $variant={ButtonVariant.Colored}
              $color={ButtonColor.Blue}
              icon={<PlusIcon />}
              $block
              onClick={() => setOpenedModal(true)}
            >
              {actionButtonText}
            </Button>
          </ActionButtonWrapper>
          
          <Modal title="Put up for sale" opened={openedModal} setOpened={setOpenedModal}>
            <FormItem label="Select a coin">
              <Select options={[{ value: '1', label: 'One' }]} />
            </FormItem>
          </Modal>

          <Property
            as={Link}
            to="/"
            title="Owner"
            subtitle={shortenAddress('EQAAhxl3')}
            icon
          />

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
    </>
  );
}

export default Nft;

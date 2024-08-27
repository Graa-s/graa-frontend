import { Badge, VerifiedIcon } from 'components/styled';
import { Description, ImageWrapper, NftCardLink, NftImage, Title } from './NftCard.styled';
// import { TonIcon } from 'assets/icons';
import duckIcon from 'assets/duck-logo.gif';
import type Nft from 'types/Nft';

function NftCard(props: Nft) {
  return (
    <NftCardLink to="item/">
      <ImageWrapper>
        <NftImage width={194} height={200} src={props.image} alt={props.name} />

        {props.price && (
          <Badge>
            <img src={duckIcon} width={22} />
            <span>{props.price}</span>
          </Badge>
        )}
      </ImageWrapper>

      <Title>
        <span>{props.name}</span>
        {props.verified && <VerifiedIcon $width={17} $height={17} />}
      </Title>
      <Description>{props.description}</Description>
    </NftCardLink>
  );
}

export default NftCard;

import {
  FooterCopyright, FooterText,
  Social, StyledFooter, TonReference,
} from 'layout/Footer/Footer.styled';
import { Button } from 'components';
import { LogoLink } from 'components/styled';
import { TelegramIcon, TonCircleIcon } from 'assets/icons';

function Footer() {
  return <StyledFooter>
    <LogoLink to="/">graa.io</LogoLink>
    <FooterText>GRAA — NFT Marketplace on The Open Network.<br />Create, sell, or collect
      NFTs.</FooterText>

    <Social>
      <Button $icon={<TelegramIcon />} href="https://t.me/GraaNFT">Telegram</Button>
    </Social>

    <FooterCopyright>
      <span>© 2024 graa.io</span>

      <TonReference>
        <span>Based on TON</span>
        <TonCircleIcon width={24} height={24} />
      </TonReference>
    </FooterCopyright>
  </StyledFooter>;
}

export default Footer;

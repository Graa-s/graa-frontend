import { SearchInput } from 'components';
import { Button, LogoLink } from 'components/styled';
import { Logo, StyledHeader } from './Header.styled';
import { moonIcon, plusCircleIcon } from 'assets/icons';

function Header() {
  return <StyledHeader>
    <Logo>
      <LogoLink to="/">graa.io</LogoLink>
    </Logo>
    <SearchInput $width={410} placeholder="Search Items, Collections and accounts" />
    <Button $icon={moonIcon} />
    <Button $icon={plusCircleIcon}>Connect wallet</Button>
  </StyledHeader>;
}

export default Header;

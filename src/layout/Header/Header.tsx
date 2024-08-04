import { useContext } from 'react';
import { setTheme, ThemeStateContext } from 'contexts/ThemeStateContext';
import { Button, SearchInput } from 'components';
import { LogoLink } from 'components/styled';
import { Logo, StyledHeader } from './Header.styled';
import { MoonIcon, PlusCircleIcon } from 'assets/icons';
import { ThemeName } from 'types/themes';

function Header() {
  const { setThemeState } = useContext(ThemeStateContext)!;

  function handleOnThemeClick() {
    setThemeState(prevState => {
      let newTheme: ThemeName = ThemeName.Light;
      if (prevState.themeName === ThemeName.Light) newTheme = ThemeName.Dark;

      return setTheme(newTheme);
    });
  }

  return <StyledHeader>
    <Logo>
      <LogoLink to="/">graa.io</LogoLink>
    </Logo>
    <SearchInput $width={410} placeholder="Search Items, Collections and accounts" />
    <Button $icon={<MoonIcon />} onClick={handleOnThemeClick} />
    <Button $icon={<PlusCircleIcon />}>Connect wallet</Button>
  </StyledHeader>;
}

export default Header;

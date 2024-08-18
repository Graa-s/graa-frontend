import { useContext } from 'react';
import ThemeStateContext, { setTheme } from 'contexts/ThemeStateContext';
import { Button, SearchToolbar } from 'components';
import { LogoLink } from 'components/styled';
import { HeaderContainer, StyledHeader, Logo } from './Header.styled';
import { useMediaQuery } from 'hooks';
import { MoonIcon, SunIcon, PlusCircleIcon } from 'assets/icons';
import { ThemeName } from 'types/themes';

function Header() {
  const { themeState, setThemeState } = useContext(ThemeStateContext)!;
  const isWideScreen = useMediaQuery(`(min-width: ${themeState.breakpoints.sm}px)`);

  function handleOnThemeClick() {
    setThemeState(prevState => {
      let newTheme: ThemeName = ThemeName.Light;
      if (prevState.themeName === ThemeName.Light) newTheme = ThemeName.Dark;

      return setTheme(newTheme);
    });
  }

  const logo = <Logo><LogoLink to="/">graa.io</LogoLink></Logo>;

  const buttons = (
    <>
      <Button
        icon={themeState.themeName === ThemeName.Dark ? <MoonIcon /> : <SunIcon />}
        onClick={handleOnThemeClick}
      />

      <Button icon={<PlusCircleIcon />}>Connect {isWideScreen && 'wallet'}</Button>
    </>
  );

  return (
    <StyledHeader>
      <HeaderContainer>
        <SearchToolbar
          width={410}
          inputAttributes={{ placeholder: 'Search Items, Collections and accounts' }}
          leftCollapsibleContent={logo}
          rightCollapsibleContent={buttons}
        />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;

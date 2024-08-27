import { useContext } from 'react';
import { useTonConnectUI, useTonConnectModal } from '@tonconnect/ui-react';
import { useMediaQuery } from 'hooks';
import { getTonConnectThemeName } from 'utils';
import ThemeStateContext, { composeTheme } from 'contexts/ThemeStateContext';
import { Button, SearchToolbar } from 'components';
import { LogoLink } from 'components/styled';
import { HeaderContainer, StyledHeader, Logo } from './Header.styled';
import { MoonIcon, SunIcon, PlusCircleIcon } from 'assets/icons';
import { ThemeName } from 'types/themes';

function Header() {
  const { themeState, setThemeState } = useContext(ThemeStateContext)!;
  const setTonConnectOptions = useTonConnectUI()[1];
  const tonConnectModal = useTonConnectModal();
  const isWideScreen = useMediaQuery(`(min-width: ${themeState.breakpoints.sm}px)`);

  function handleOnThemeClick() {
    setThemeState(prevState => {
      let oppositeTheme = ThemeName.Light;
      if (prevState.themeName === ThemeName.Light) oppositeTheme = ThemeName.Dark;

      setTonConnectOptions({
        uiPreferences: {
          theme: getTonConnectThemeName(oppositeTheme),
        },
      });

      localStorage.setItem('theme', oppositeTheme);

      return composeTheme(oppositeTheme);
    });
  }

  const logo = <Logo><LogoLink to="/">graa.io</LogoLink></Logo>;

  const buttons = (
    <>
      <Button
        icon={themeState.themeName === ThemeName.Dark ? <MoonIcon /> : <SunIcon />}
        onClick={handleOnThemeClick}
      />

      <Button
        icon={<PlusCircleIcon />}
        onClick={tonConnectModal.open}
      >
        Connect {isWideScreen && 'wallet'}
      </Button>
    </>
  );

  return (
    <StyledHeader>
      <HeaderContainer>
        <SearchToolbar
          searchWidth={410}
          inputAttributes={{ placeholder: 'Search Items, Collections and accounts' }}
          leftCollapsibleContent={logo}
          rightCollapsibleContent={buttons}
        />
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;

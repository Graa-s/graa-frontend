import { css } from 'styled-components';
import SFProRegular from 'assets/fonts/SFPro/SFPro-Regular.ttf';
import SFProMedium from 'assets/fonts/SFPro/SFPro-Medium.ttf';
import SFProSemibold from 'assets/fonts/SFPro/SFPro-Semibold.ttf';
import SFProBold from 'assets/fonts/SFPro/SFPro-Bold.ttf';

export default css`
  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProSemibold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(${SFProBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

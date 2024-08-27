import { RouterProvider } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { useTheme } from 'styled-components';
import { getTonConnectThemeName } from 'utils';
import { GlobalStyle } from 'components/styled';
import router from 'router';
import axios from 'axios';
import { useEffect } from 'react';

const tonManifestUrl = 'http://localhost:5173/tonconnect-manifest.json';

function App() {
  const theme = useTheme();

  useEffect(() => {
    const bearer = 'KUpuNRJJ4qo?S5IqE/xob9hGt1G8LdM!IazoT/l!vxrvLuFmSJw/bmSUXDosyd2o1Yv/1i12e3xrL7le/Rw233MJWf8InhucuBk1Uyok7aPZsM-UDd6jeF5p-DiVO-6DQZ9Cnzdmq/p DqNuhUCFko/hOXuIUuQz21sixhYh4U=!jc1jl-YFl9VnM4NXhc0YPNCA571daCZnycRvsG9?Cu8F5kCnoMPew6hv5qzxylaTz-iBAwUSgbxYHxj0H3oE?';
    const headers = { 'Authorization': 'Bearer ' + bearer };
    const base = 'http://taiga-labs.pro:8013/collection/get';
    const collectionAddress = 'EQC1Bq1GJY9ON_2WpSroVlXpejzfLNA8XoL2MYxtN50ZbJfN';
    const currentPage = 5;
    const pageSize = 5;

    const url = `${base}/${collectionAddress}/page/${currentPage}/page-size/${pageSize}`;
    axios.get(url, { headers }).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  }, []);

  return (
    <TonConnectUIProvider
      uiPreferences={{ theme: getTonConnectThemeName(theme.themeName) }}
      manifestUrl={tonManifestUrl}
    >
      <GlobalStyle />
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  );
}

export default App;

import { createBrowserRouter } from 'react-router-dom';
import { Home, Collection, Nft, Error } from 'pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/collection/:address',
    element: <Collection />,
    errorElement: <Error />,
  },
  {
    path: '/collection/:collectionAddress/:nftAddress',
    element: <Nft />,
    errorElement: <Error />,
  },
  {
    path: '/nft/:address',
    element: <Nft />,
    errorElement: <Error />,
  },
]);

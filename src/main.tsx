import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeStateProvider } from 'contexts/ThemeStateContext';
import { GlobalStyle } from 'components/styled';
import router from 'router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeStateProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeStateProvider>
  </React.StrictMode>,
);

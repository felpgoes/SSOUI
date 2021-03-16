import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';

import Toast from './components/molecules/Toast';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Toast autoClose={5000} />
    </>
  );
}

export default App;

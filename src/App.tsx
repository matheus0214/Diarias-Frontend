import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import HooksContainer from './hooks';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HooksContainer>
        <Routes />
      </HooksContainer>
    </BrowserRouter>
  );
};

export default App;

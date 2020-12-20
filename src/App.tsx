import React from 'react';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/theme/defaultTheme';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
};

export default App;

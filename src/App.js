import React from 'react';

// THEME
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

// COMPONENTS
import LineUp from 'features/line-up/LineUp';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LineUp />
    </ThemeProvider>
  );
}

export default App;

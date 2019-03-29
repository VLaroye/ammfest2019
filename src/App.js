import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCampground, faUtensils } from '@fortawesome/free-solid-svg-icons';

import "animate.css/animate.min.css";

// ROUTING
import { BrowserRouter as Router } from 'react-router-dom'

// THEME
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

// COMPONENTS
import Layout from 'components/layout/Layout';
import LineUp from 'features/line-up/LineUp';
import Infos from 'features/infos/Infos';

library.add( faCampground, faUtensils )

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  background: linear-gradient(to bottom, rgba(101,234,163,1) 0%, rgba(28,75,48,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#65eaa3', endColorstr='#1c4b30', GradientType=0 );

  ${media.laptop`
    
    overflow-y: hidden;
  `}
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Layout>
            <LineUp />
            <Infos />
          </Layout>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

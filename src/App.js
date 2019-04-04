import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCampground, faUtensils, faGlobeAmericas, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faSoundcloud, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "animate.css/animate.min.css";

// ROUTING
import routes from 'utils/router';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

// THEME
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';

// COMPONENTS
import Layout from 'components/layout/Layout';

library.add( faCampground, faUtensils, faFacebookSquare, faSoundcloud, faYoutube, faGlobeAmericas, faChevronRight, faChevronLeft )

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
            <Switch>
              {routes.map(({ exact, path, name, component }) => <Route exact path={path} name component={component} />)}
            </Switch>
          </Layout>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;

import React, { Fragment } from 'react';

// COMPONENTS
import LineUp from './line-up/LineUp';
import Infos from './infos/Infos';
import Footer from './footer/Footer';
import Header from './header/Header';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <LineUp />
      <Infos />
      <Footer />
    </Fragment>
  )
}

export default Home;
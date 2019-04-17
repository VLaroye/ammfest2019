import React, { Fragment } from 'react';

// COMPONENTS
import LineUp from './line-up/LineUp';
import Infos from './infos/Infos';
import Footer from './footer/Footer';

const Home = () => {
  return (
    <Fragment>
      <LineUp />
      <Infos />
      <Footer />
    </Fragment>
  )
}

export default Home;
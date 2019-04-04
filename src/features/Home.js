import React, { Fragment } from 'react';

// COMPONENTS
import LineUp from './line-up/LineUp';
import Infos from './infos/Infos';

const Home = () => {
  return (
    <Fragment>
      <LineUp />
      <Infos />
    </Fragment>
  )
}

export default Home;
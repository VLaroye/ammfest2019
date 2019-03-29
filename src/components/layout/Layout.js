import React, { Fragment, useState } from 'react';

// COMPONENTS
import SideBar from './SideBar';

const Layout = ({ children }) => {
  const [isSideBarOpen, toggleSideBar] = useState(false);

  return (
    <Fragment>
      <SideBar isOpen={isSideBarOpen} toggleSideBar={() => toggleSideBar(!isSideBarOpen)}/>
      <main id="page-wrap">
        { children }
      </main>
      
    </Fragment>
  )
};

export default Layout;
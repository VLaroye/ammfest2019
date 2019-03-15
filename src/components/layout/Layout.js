import React, { Fragment, useState } from 'react';

// COMPONENTS
import TopBar from './TopBar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
  const [isSideBarOpen, toggleSideBar] = useState(false);

  return (
    <Fragment>
      <TopBar toggleSideBar={() => toggleSideBar(!isSideBarOpen)}/>
      <SideBar isOpen={isSideBarOpen} toggleSideBar={() => toggleSideBar(!isSideBarOpen)}/>
      { children }
    </Fragment>
  )
};

export default Layout;
import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

// COMPONENTS
import SideBar from './SideBar';
import Tickets from './Tickets';

const Header = styled.div`
display:flex;
flex-direction:row;

`;
const Layout = ({ children }) => {
  const [isSideBarOpen, toggleSideBar] = useState(false);

  return (
    <Fragment>
      <Header>
        <SideBar isOpen={isSideBarOpen} toggleSideBar={() => toggleSideBar(!isSideBarOpen)}/>
        <Tickets/>
      </Header>
      <main id="page-wrap">
        { children }
      </main>
      
    </Fragment>
  )
};

export default Layout;
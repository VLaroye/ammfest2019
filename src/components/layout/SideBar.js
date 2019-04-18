import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

// ROUTING
import { Link } from 'react-router-dom';

const MenuContainer = styled(Menu)`
`;
const Container = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  `;
const SideBar = ({ isOpen }) => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: 'white'
    },
    bmBurgerBarsHover: {
      background: 'white'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      padding: '0'
    },
    bmMenu: {
      background: 'linear-gradient(to bottom, rgba(242,43,66,1) 0%, rgba(254,113,13,1) 100%)',
      padding: '2.5em 2em 0',
      fontSize: '2em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }
  return (
    <MenuContainer pageWrapId={'page-wrap'} isOpen={isOpen} styles={styles}>
     <Container  to={`/`} >
        <a href="/" className="menu-item">Home</a>
     </Container>
    </MenuContainer>
  )
}

export default SideBar;
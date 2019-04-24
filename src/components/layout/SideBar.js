import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

const Link = styled.a`
  &:focus {
    border: 0 px solid black;
    outline: unset;
  }

  &:hover {
    font-weight: bold;
  }
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
      fontSize: '1.5em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'white',
    },
    bmItem: {
      textTransform: 'uppercase',
      display: 'inline-block',
      width: '100%',
      paddingBottom: '1em',
      color: 'inherit',
      textDecoration: 'none'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.5)'
    }
  }
  return (
    <Menu pageWrapId={'page-wrap'} isOpen={isOpen} styles={styles}>
      <Link href="/#" className="menu-item">Home</Link>
      <Link href="/#lineUp" className="menu-item">Line-up</Link>
      <Link href="/#info" className="menu-item">Informations</Link>
      <Link href="/" className="menu-item">Réservation</Link>
      <Link href="/" className="menu-item">Sponsos</Link>
    </Menu>
  )
}

export default SideBar;
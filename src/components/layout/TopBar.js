import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

// MEDIA
import media from 'utils/media';

// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// IMG
import logo from 'assets/logo.png';

const Container = styled.nav`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;

  div {
    margin-top: 1.5em;

    h2, h3 {
      margin: 0;
      font-size: 1em;
      color: white;
      text-shadow: 3px 3px 20px gray;
    }

    h2 {
      text-transform: uppercase;
    }

    h3 {
      margin-left: 0.6em;
    }
  }

  img {
    width: 7em;
    height: 7em;
    margin: 1em 0 0 1em;
    transition:transform .9s;

    &:hover {
      cursor: pointer;
      transform:rotate(540deg); 
    }
  }
`;

const Nav = styled.div`
  font-family: 'Big John';
  padding-right: 2em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: bold;
  margin-top: 1.5em;
  text-shadow: 3px 3px 20px green;

  ul {
    display: none;
    color: white;
  }

  ${media.laptop`
    ul {
    margin: 0;
    list-style: none;
    display: flex;

    li {
      margin: 0 1.5em;
      padding: 1em;
    }
  `}
`;

const HamburgerButton = styled(FontAwesomeIcon)`
  ${media.laptop`
    display: none;
  `}
`;

const BookingButton = styled.li`
  background-color: orange;
  text-shadow: none;
`;

const TopBar = ({ toggleSideBar }) => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo AMM"/>
        <div>
          <h2>19-20 Juillet</h2>
          <h3>Steenvoorde</h3>
        </div>
      </Logo>
      <Nav>
        <ul>
          <ScrollAnimation offset={0} animateIn='bounceInDown' animateOnce>
            <li>Accueil</li>
          </ScrollAnimation>
          <ScrollAnimation offset={0} delay={100} animateIn='bounceInDown' animateOnce>
            <li>Line up</li>
          </ScrollAnimation>
          <ScrollAnimation offset={0} delay={200} animateIn='bounceInDown' animateOnce>
            <li>Infos</li>
          </ScrollAnimation>
          <ScrollAnimation offset={0} delay={300} animateIn='bounceInDown' animateOnce>
            <li>Reseaux</li>
          </ScrollAnimation>
          <BookingButton>Tickets</BookingButton>
        </ul>
        <HamburgerButton onClick={toggleSideBar} className="hamburgerMenu" icon={faBars} size='2x' />
      </Nav>
    </Container>
  )
}

export default TopBar;
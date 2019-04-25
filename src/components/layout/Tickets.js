import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  font-family: 'Roboto Condensed';
  background: linear-gradient(to bottom, rgba(242,43,66,1) 0%, rgba(254,113,13,1) 100%);
  position:absolute;
  z-index: 2;
  right: 0%;
  text-transform: uppercase;
  color:white;
  font-size: 1em;
  font-weight: bold;
  padding: 1em;
  border-radius: 0 0 0 15px;
  cursor: pointer;

  ${media.laptop`
    padding: 1.6em;
  `}

  ${media.xxl`
    padding: 1.6em;
    font-size: 1.5em;
  `}

  a, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const Tickets = () => {
  return (
    <Container>
      <a href="/">
        Tickets
      </a>
    </Container>
  )
}

export default Tickets;

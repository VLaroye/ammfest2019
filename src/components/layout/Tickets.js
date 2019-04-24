import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  background: linear-gradient(to bottom, rgba(242,43,66,1) 0%, rgba(254,113,13,1) 100%);
  position:absolute;
  z-index: 2;
  right: 0%;
  text-transform: uppercase;
  color:white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 1.3em;
  border-radius: 0 0 0 15px;
  cursor: pointer;

  ${media.laptop`
    padding: 1.6em;
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

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: linear-gradient(to bottom, rgba(242,43,66,1) 0%, rgba(254,113,13,1) 100%);
  position:absolute;
  right: 0%;
  text-transform: uppercase;
  color:white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 2em;
  border-radius: 0 0 0 15px;
`;

const Tickets = () => {
  return (
  <Container>Tickets</Container>
  )
}

export default Tickets;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 3em;
  margin: 8em 3em;
  z-index: 0;
  color: white;
  font-family: Roboto; 
  text-transform: uppercase;
  background-color: black;
  `;
const Header = () => {
  return (
    <Container>billeterie ouverte ! </Container>
    )
};

export default Header; 
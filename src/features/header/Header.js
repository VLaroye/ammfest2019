import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  color: white;
  position: relative;
  margin: 15em 10em;  

  p {
    text-align: end;
    width: 36.5rem;
    box-sizing: border-box;
    margin: 0.5em;
    font-size: 1.2em;
  }`;


const Actuality = styled.div`
  font-size: 2.5em;
  text-transform: uppercase;
  background-color: #00210b;
  position: relative;
  text-align:center;
  width: 35rem;
  padding: 0.5em;
  border-radius: 10px;

  .heart {
    padding-right: 0.5em;
    color: #dec1b7;
  }

  `;
const Header = () => {
  return (
    <Container>
      <p>#AMMFEST</p>
      <Actuality>
        <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
        billeterie online ! 
      </Actuality>
      <p>19-20 JUILLET 2019</p>
    </Container>
    )
};

export default Header; 
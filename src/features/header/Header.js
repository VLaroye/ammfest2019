import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  color: white;
  position: relative;
  margin: 10em 2em 2em 2em;

  ${media.tablet`
    margin-left: 4em;  
  `}

  ${media.desktop`
    margin-left: 15%;  
    margin-bottom: 10rem;
  `}

  ${media.xxl`
    margin: 15rem 20%;
  `}

  p {
    text-align: end;
    box-sizing: border-box;
    margin: 0.5em;
    font-size: 1.2em;
    max-width: 20rem;

    ${media.desktop`
    max-width: 30rem;
    `}
    
    ${media.xxl`
      max-width: 40rem;
    `}

  }`;


const Actuality = styled.div`

  text-transform: uppercase;
  background-color: #00210b;
  position: relative;
  text-align: left;
  padding: 0.5em;
  border-radius: 10px;
  font-weight: bold;
  max-width: 20rem;

  ${media.tablet`
    font-size: 1.5em;
  `}

  ${media.desktop`
    font-size: 2em;  
    max-width: 30rem;
  `}

  ${media.xxl`
    max-width: 40rem;
  `}

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
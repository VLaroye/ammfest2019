import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Text = styled.div`
  color: white;
  position: relative;
  margin: 10em 2rem 2rem 2rem;
  font-family: 'Roboto Condensed';

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
    font-size: 1em;
    max-width: 20rem;

    ${media.desktop`
    max-width: 30rem;
    font-size: 2em;
    `}
    
    ${media.xxl`
      max-width: 40rem;
    `}

  }`;


const Actuality = styled.div`
  font-family: 'Roboto Condensed';
  text-transform: uppercase;
  background-color: #00210b;
  position: relative;
  text-align: left;
  padding: 0.3em 0.5em;
  border-radius: 10px;
  font-weight: bold;
  max-width: 20rem;
  font-size: 1.3em;

  ${media.tablet`
    font-size: 1.5em;
  `}

  ${media.desktop`
    font-size: 2.8em;  
    max-width: 30rem;
  `}

  ${media.xxl`
    max-width: 40rem;
  `}

  .heart {
    padding-right: 0.5em;
    color: #64e7a1;
  }
`;

const Social = styled.div``;

const Container = styled.div`
  display: flex;

  a {
    color: inherit;
  }

  .logo {
    display:none;
    flex-direction: column;
    color: white;
    position: relative;
    margin: 8em 2rem 2rem 2rem;
    font-size: 2.2em;

    ${media.tablet`
    margin-left: 4em;
    display: flex;  
  `}

  ${media.desktop`
    margin-left: 15%;  
    margin-bottom: 10rem;
  `}

  ${media.xxl`
    margin: 15rem 20%;
  `}
  }

  .icon {
    padding-bottom: 0.3em;
  }
`;


const Header = () => {
  return (
    <Container>
      <Text>
        <p>#AMMFEST</p>
        <Actuality>
          <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
          billetterie online ! 
        </Actuality>
        <p>19 - 20 JUILLET 2019</p>
      </Text>
      <Social>
        <div className="logo">
          <a href='https://www.facebook.com/AMM.artmassandmess/' className="link">
            <FontAwesomeIcon className="icon" icon={['fab', 'facebook-square']} />
          </a>
          <a href='https://www.instagram.com/amm_fest/?fbclid=IwAR0Es5d28UtoMuLIcRJMTpVAY_ik1Aebj0EIgdotxa6Iv9vgMhLsK_dOoCU' className="link">
            <FontAwesomeIcon className="icon" icon={['fab', 'instagram']} />
          </a>
          <a href='https://www.youtube.com/channel/UCyc6lWpR1mbZ5YMcIJ6VCKw/featured?disable_polymer=1/' className="link">
            <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
          </a>
          <a href='https://twitter.com/ArtMassMess/' className="link">
            <FontAwesomeIcon className="icon" icon={['fab', 'twitter']} />
          </a>
        </div>
      </Social>
    </Container>
    )
};

export default Header; 
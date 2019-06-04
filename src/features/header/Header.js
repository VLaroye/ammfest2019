import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

const Text = styled.div`
  color: white;
  position: relative;
  margin: 10em 2rem 2rem 2rem;
  font-family: 'Roboto Condensed';

  a {
    text-decoration: none;
    color: inherit;
  }

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
    align-items: center;
    color: white;
    position: relative;
    margin: 4em 2rem 2rem 2rem;
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

  #facebook, #instagram, #youtube, #twitter {
    transition: 0.8s;
  }

  #facebook:hover {
    color: #3C5A99;
  }

  #instagram:hover {
    color: #8a3ab9;
  }

  #youtube:hover {
    color: #FF0000;
  }

  #twitter:hover {
    color: #38A1F3;
  }
`;


const Header = () => {
  return (
    <Container>
      <Text>
        <p>#AMMFEST</p>
        <a href="https://www.weezevent.com/amm-fest-5" target="_blank" rel="noopener noreferrer">
          <Actuality>
            <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
            billetterie online ! 
          </Actuality>
        </a>
        <p>19 - 20 JUILLET 2019</p>
      </Text>
      <Social>
        <div className="logo">
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={400}>
            <a href='https://www.facebook.com/AMM.artmassandmess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="facebook" icon={['fab', 'facebook-square']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={600}>
            <a href='https://www.instagram.com/amm_fest/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="instagram" icon={['fab', 'instagram']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={800}>
            <a href='https://www.youtube.com/channel/UCyc6lWpR1mbZ5YMcIJ6VCKw/featured?disable_polymer=1/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="youtube" icon={['fab', 'youtube']} />
            </a>
          </ScrollAnimation>   
          <ScrollAnimation animateIn='bounceInRight' animateOnce offset={0} delay={1000}>
            <a href='https://twitter.com/ArtMassMess/' target="_blank" rel="noopener noreferrer" className="link">
              <FontAwesomeIcon className="icon" id="twitter" icon={['fab', 'twitter']} />
            </a>
          </ScrollAnimation>   
        </div>
      </Social>
    </Container>
    )
};

export default Header; 
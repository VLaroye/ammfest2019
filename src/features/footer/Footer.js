import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  background-color: #042b26;
  color: white;
  padding: 2em 1.5em;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 50% auto;
  grid-template-areas: 
    "sponso logos"
    "legal logos";

  ${media.tablet`
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-template-areas: "legal sponso logos";
  `}

  a {
    color: inherit;
  }    
  
  .sponso {
    grid-area: sponso;
    margin: 0;
    font-size: 1.4em;

    ${media.tablet`
      font-size: 1.4em;
      text-align: center;
    `}

    ${media.tablet`
      font-size: 1.6em;
    `}

    ${media.xl`
      font-size: 2em;
    `}
  }

  .legal {
    grid-area: legal;
    font-size: 0.8em;
  }

  .logos {
    grid-area: logos;
    display: flex;
    flex-wrap: wrap;
    font-size: 2.5em;
    align-items: center;
    
    ${media.tablet`
      justify-content: flex-end;
      font-size: 2.3em;
    `}

    ${media.desktop`
      font-size: 3em;
    `}

    ${media.xl`
      font-size: 3.2em;
    `}
    
    .link {
      width: 50%;
      text-align: center;

      ${media.tablet`
        width: 23%;
      `}

      ${media.desktop`
        width: 20%;
      `}

      ${media.xl`
        width: 17%;
      `}

      ${media.xxl`
        width: 12%;
      `}
    }
  }
`;

const Footer = () => {
  return (
  <Container>   

    <h1 className="sponso">
      <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
      {" "}NOS SPONSOS
    </h1>
    <div className="legal">
      <Link  to={`/about`} className="about" >
        Mentions légales
      </Link>
      <div>
        Copyright © 2019 <br/>Agathe Gossey & Vincent Laroye.<br />Tous droits réservés.
      </div>
    </div>
    
    <div className="logos">
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
  </Container>
  )
}

export default Footer;
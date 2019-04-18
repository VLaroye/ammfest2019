import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  background-color: #042b26;
  display:flex;
  justify-content:space-around;
  color:white;
  padding: 4rem 0;


  .about {
    color: white;
  }

  h1 {

  }
  .heart {
    margin-right: 0.5em;
  }
  .icon {
    font-size: 4.5em;
    color: white;
    margin-right:0.3em;
  }

  .text {
    font-size: 0.8em;
    text-align:center;
  }

`;

const Footer = () => {
  return (
  <Container>     
    <h1>
      <FontAwesomeIcon className="heart" icon={['fa', 'heart']} />
      NOS SPONSOS
    </h1>
    <div className="text">
      <Link  to={`/about`} className="about" >
        Mentions légales
      </Link>
      <div>Copyright © 2019 Agathe Gossey & Vincent Laroye.<br></br>Tous droits réservés.</div>
    </div>
    <div className="socialMedia">
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
import React from 'react';
import styled from 'styled-components';
import find from 'lodash/find';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// ARTISTS
import ARTISTS from 'constants.js';

const Container = styled.div`
  width: 60%;
  background-color:white;
  margin: 8em auto;
  padding-bottom: 3em;

  img {
    display:flex;
    margin: auto;
    width: 100%;
  }

  .textContainer {
    margin: 5em;
    text-align: justify;
  }

  .header {
    display:flex;
    justify-content:space-around;
  }
  
  .title {
    display:flex;
  }
  
  .name {
    text-transform:uppercase;
    letter-spacing: 5px;
    font-size:2em;
    font-weight: bold;
    color: #BC9142;
  }

  .style {
    font-size: 1em;
    font-weight: normal;
    margin-top: 0.8em;
  }

  .descriptionContainer {
    margin-top: 4em;
  }

  .description {
    letter-spacing: 1px;
  }

  .icons {
    font-size: 2em;
  }

  .link {
    padding: 0 0.5em;
  }

  .test {
    font-size: 3em;
  }

  .iconLeft {
    right:0.5em;
  }

  .iconRight {
    left: 0.5em;
  }
`;

const Artist = ({ match }) => {
  const artist = find(ARTISTS, artist => artist.id === match.params.id);

  return (
    <Container>
      <img src={ artist.artistImg } alt={ artist.name }/>
      <div className="textContainer">
        <div className="header"> 
          <div className="title"> 
            <div className="name">{ artist.name }</div>
            <div className="style">{ artist.style }</div>  
          </div>        
          <div className="icons">
            <a href={ artist.liens.site } className="link">
              <FontAwesomeIcon className="icon" icon={['fa', 'globe-americas']} />
            </a>
            <a href={ artist.liens.soundcloud } className="link">
              <FontAwesomeIcon className="icon" icon={['fab', 'soundcloud']} />
            </a>
            <a href={ artist.liens.facebook } className="link">
              <FontAwesomeIcon className="icon" icon={['fab', 'facebook-square']} />
            </a>
            <a href={ artist.liens.youtube } className="link">
              <FontAwesomeIcon className="icon" icon={['fab', 'youtube']} />
            </a>
          </div>
        </div>
        <div className="descriptionContainer">
          <p className="description">{ artist.description.first }</p>
          <p className="description">{ artist.description.second }</p>      
        </div>
        <div className="test">
          <Link to={`/artiste/bafang`}>
            <FontAwesomeIcon className="iconLeft" icon={['fa', 'chevron-left']} />
          </Link>
          <Link to={`/artiste/bafang`}>
            <FontAwesomeIcon className="iconRight" icon={['fa', 'chevron-right']} />
          </Link>
        </div>
      </div>

    </Container>

  )
}

export default Artist;
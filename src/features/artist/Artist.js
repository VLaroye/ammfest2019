import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import findIndex from 'lodash/findIndex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Footer from 'features/footer/Footer';

// ARTISTS
import ARTISTS from 'constants.js';

const Container = styled.div`
  background-color: white;
  box-shadow: 5px 30px 100px #245d3d;
  margin: 8em auto;
  
  ${media.tablet`
      width: 80%;
  `}

  width: 100%;

  .iconLeft, .iconRight {
    position: absolute;
    top: 50%;
    font-size: 2em;
  }

  .iconLeft {
    left: -2%;
  }

  .iconRight {
    z-index: 2;
    right: -2 % ;
  }

  .circleRight {
    color: white;
    font-size: 1em;
  }

  .link {
    padding: 0 0.5em;
  }
  
  .videoContainer {
    position: relative;
    padding-bottom: 56.25% /* 16:9 */;
    padding-top: 25;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ArtistImg = styled.img`
  display: flex;
  margin: auto;
  width: 100%;
`;

const TextContainer = styled.div`
  position: relative;
  padding: 5em;
`;

const Header = styled.div`
  display:flex;
  justify-content:space-around;
  align-items: center;
`;

const ArtistName = styled.div`
  text-transform:uppercase;
  letter-spacing: 5px;
  font-size:2em;
  font-weight: 900;
  color: #BC9142;
`;

const ArtistStyle = styled.div `
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 900;
  color: white;
  background-color: black;
  text-align: center;
  margin-top: 0.2em;
  letter-spacing: 1px;
`;

const SocialIcons = styled.div `
  font-size: 2em;
`;

const DescriptionContainer = styled.div `
  padding-top: 2em;
  width: 70%;
  margin: auto;
  text-align: justify;

  .description {
    letter-spacing: 1px;
    font-size: 0.9em;
  }
`;

const Artist = ({ match }) => {
  const artistsArray = Object.values(ARTISTS);
  const artistIndex = findIndex(artistsArray, artist => artist.id === match.params.id);
  const artist = artistsArray[artistIndex];

  const prevLink = artistsArray[artistIndex-1] ? artistsArray[artistIndex-1].id : artistsArray[artistsArray.length-1].id;
  const nextLink = artistsArray[artistIndex+1] ? artistsArray[artistIndex+1].id : artistsArray[0].id;

  return (
    <Fragment>
      <Container>
        <ArtistImg src={ artist.artistImg } alt={ artist.name }/>
        <TextContainer>
          <Header> 
            <div> 
              <ArtistName>{ artist.name }</ArtistName>
              <ArtistStyle>{ artist.style }</ArtistStyle>  
            </div>        
            <SocialIcons>
              {artist.links.site ? <a href={ artist.links.site } className="link">
                <FontAwesomeIcon icon={['fa', 'globe-americas']} />
              </a> : null}
              {artist.links.soundcloud ? <a href={ artist.links.soundcloud } className="link">
                <FontAwesomeIcon icon={['fab', 'soundcloud']} />
              </a> : null}
              {artist.links.facebook ? <a href={ artist.links.facebook } className="link">
                <FontAwesomeIcon icon={['fab', 'facebook-square']} />
              </a> : null}
              {artist.links.youtube ? <a href={ artist.links.youtube } className="link">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
              </a> : null}
            </SocialIcons>
          </Header>
          <DescriptionContainer>
            <p className="description">{ artist.description.first }</p>
            <p className="description">{ artist.description.second }</p>      
          </DescriptionContainer>
          <Link to={`/artiste/${prevLink}`}>
            <FontAwesomeIcon className="iconLeft" icon={['fa', 'chevron-left']} />
          </Link>
          <Link to={`/artiste/${nextLink}`}>
            <FontAwesomeIcon className="iconRight" icon={['fa', 'chevron-right']} />
          </Link>
        </TextContainer>
        <YouTube 
          videoId={artist.video}
          className="video"
          containerClassName="videoContainer"
        />
      </Container>
      <Footer />
    </Fragment>
    
  )
}

export default Artist;
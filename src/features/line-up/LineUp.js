import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import LineUpElement from './LineUpElement';

import andMoreImg from 'assets/ANDMORE.png';

// ARTISTS
import artists from 'constants.js';

const LineUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  box-shadow: 5px 30px 100px #245d3d;

  ${media.tablet`
    max-width: 90%;
  `}

  ${media.desktop`
    max-width: 80%;
  `}
  
`;

const LineUpElt = styled.figure`
  margin: 0;
  width: 100%;
  height: auto;
	box-sizing: border-box;
	list-style: none;
  position: relative;
	overflow: hidden;
	background: #3085a3;
	text-align: center;
	cursor: pointer;

  ${media.tablet`
      width: 50%;
  `}

  ${media.laptop`
      width: calc(1/3)%;
  `}

  ${media.xl`
      width: 25%;
  `}

  *, *:after, *:before { box-sizing: border-box; }

  img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.9;
  }
`;

const LineUp = () => {
  return (
    <div id="lineUp">
      <SectionTitle text="Line-up"/>
      <LineUpContainer>
        {Object.values(artists).map(artist => (
          <LineUpElement artist={ artist } key={ artist.id } />
        ))}
        <LineUpElt>
          <img src={andMoreImg} alt="and more..."/>		
        </LineUpElt>
       
      </LineUpContainer>
    </div>
  )
}

export default LineUp;
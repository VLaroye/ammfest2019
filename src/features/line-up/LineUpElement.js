import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import { Link } from 'react-router-dom';
import LineUpText from './LineUpText';

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
    transition: opacity 0.35s;
  }
`;

const LineUpElement = ({ artist }) => {
  return (
    <LineUpElt>
      <Link  to={`/artiste/${artist.id}`} >
        <img src={ artist.lineUpImg } alt={ artist.name }/>
        <LineUpText>
          <h2>{ artist.name }</h2>
          <p>{ artist.style }</p>
        </LineUpText>			
      </Link>
    </LineUpElt>
  );
}

export default LineUpElement;
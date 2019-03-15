import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

// IMAGE
import lineup from 'assets/lineup.jpg';

const LineUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  ${media.tablet`
    max-width: 80%;
  `}
`;

const LineUpTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.sectionTitleColor};
  letter-spacing: 10px;
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
      width: 33%;
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

const LineUpText = styled.figcaption`
  padding: 1.5em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  backface-visibility: hidden;

  ${media.tablet`
    p {
      font-size: 65%;
    }
  `}

  ${media.laptop`
    p {
      font-size: 65%;
    }
  `}

  &, & > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    transition: transform 0.35s;
  }

  span {
    font-weight: 800;
  }

  h2, p {
    margin:1em;
  }

  p {
    letter-spacing: 1px;
    padding: 0.7em;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(1.5);
  }

  &::before, &::after {
    pointer-events: none;
  }

  &::before {
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;
    border: 2px solid #fff;
    box-shadow: 0 0 0 30px rgba(255,255,255,0.2);
    content: '';
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale3d(1.4,1.4,1);
  }

  &:hover {
    background-color: rgba(58,52,42,0);

    h2 {
      transform: scale(0.9);
    }

    img {
      opacity: 0.4;
    }

    &::before, p {
      opacity: 1;
      transform: scale3d(1,1,1);
    }
  }
`;

const LineUp = () => {
  return (
    <Fragment>
      <LineUpTitle>Line up</LineUpTitle>
      <LineUpContainer>
        <LineUpElt>
          <img src={lineup} alt="YouMan"/>
          <LineUpText>
            <h2>You<span>Man</span></h2>
            <p>Electro/DarkDisco</p>
          </LineUpText>			
        </LineUpElt>
        <LineUpElt>
          <img src={lineup} alt="YouMan"/>
          <LineUpText>
            <h2>You<span>Man</span></h2>
            <p>Electro/DarkDisco</p>
          </LineUpText>			
        </LineUpElt>
      </LineUpContainer>
    </Fragment>
  )
}

export default LineUp;
import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

// IMAGE
import lineup from 'assets/lineup.jpg';

const LineUpContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  ${media.tablet`
    max-width: 70%;
  `}
`;

const LineUpDiv = styled.div`
  display:flex;
  width: 100%;
	box-sizing: border-box;
	list-style: none;

  ${media.tablet`
      width: 50%;
  `}

  ${media.laptop`
      width: 25%;
  `}

  ${media.desktop`
      width: 25%;
  `}
`;

const LineUpTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.sectionTitleColor};
  letter-spacing: 10px;
`;

const LineUpItem = styled.div`
  position: relative;
  width: 100%;
  min-height: 10em;
  overflow: hidden;
`;

const LineUpText = styled.div`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  text-transform: uppercase;
  font-family: 'Passion one', sans-serif;
  padding: 1em;
  font-size: 1.3em;
  letter-spacing: 0.1em;
  color: white;
  background-color: #112023;
  display: none;
`;

const LineUpImg = styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s;

  &:hover  {
    transform: scale(1.05);
  } 

  &:hover + ${LineUpText} {
    display:block;
  } 
`;



const LineUp = () => {
  return (
    <Fragment>
      <LineUpTitle>Line up</LineUpTitle>
      <LineUpContainer>
        <LineUpDiv>
          <LineUpItem>
            <LineUpImg src={lineup}/>
            <LineUpText>
              Youman
            </LineUpText>
          </LineUpItem>  
        </LineUpDiv>
        <LineUpDiv>
          <LineUpItem>
            <LineUpImg src={lineup}/>
            <LineUpText>
              Bafang
            </LineUpText>
          </LineUpItem>  
        </LineUpDiv>
        <LineUpDiv>
          <LineUpItem>
            <LineUpImg src={lineup}/>
            <LineUpText>
              Angle Mort et Clignotant
            </LineUpText>
          </LineUpItem>  
        </LineUpDiv>
      </LineUpContainer>
    </Fragment>
  )
}

export default LineUp;
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
    max-width: 80%;
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

const LineUpImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LineUp = () => {
  return (
    <Fragment>
      <LineUpTitle>Line up</LineUpTitle>
      <LineUpContainer>
        <LineUpItem>
          <LineUpImg src={lineup}/>
        </LineUpItem>
        <LineUpItem>
          <LineUpImg src={lineup}/>
        </LineUpItem>
        <LineUpItem>
          <LineUpImg src={lineup}/>
        </LineUpItem>
        <LineUpItem>
          <LineUpImg src={lineup}/>
        </LineUpItem>
        <LineUpItem>
          <LineUpImg src={lineup}/>
        </LineUpItem>
      </LineUpContainer>
    </Fragment>
    
  )
}

export default LineUp;
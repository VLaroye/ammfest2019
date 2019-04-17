import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import SectionTitle from 'components/SectionTitle';
import LineUpElement from './LineUpElement';

// ARTISTS
import artists from 'constants.js';

const LineUpContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  box-shadow: 5px 30px 100px #245d3d;

  ${media.tablet`
    max-width: 80%;
  `}
`;

const LineUp = () => {
  return (
    <Fragment>
      <SectionTitle text="Line-up"/>
      <LineUpContainer>
        {Object.values(artists).map(artist => (
          <LineUpElement artist={ artist } key={ artist.id } />
        ))}
      </LineUpContainer>
    </Fragment>
  )
}

export default LineUp;
import React from 'react';
import sponso from 'assets/sponso.png';
import Footer from 'features/footer/Footer';
import styled from 'styled-components';
import media from 'utils/media';

const Image = styled.img`
  margin: 4em auto 0 auto;
  width: 100%;
  display: flex;

  ${media.laptop`
    width: 80%;
    margin: auto;
  `} 
`;

const Sponso = () => {
  return (
    <div>
      <Image src={ sponso } alt="sponso"/>
      <Footer />
    </div>
  )
}

export default Sponso;
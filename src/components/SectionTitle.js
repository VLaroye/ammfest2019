import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';

const Title = styled.h1`
  font-family: 'Big John';
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-size: 3em;
  margin: 1em 0;
`;

const SectionTitle = ({ text }) => {
  return (
    <ScrollAnimation animateIn='slideInLeft' animateOnce offset={0}>
      <Title>{text}</Title>
    </ScrollAnimation>   
  );
};

export default SectionTitle;
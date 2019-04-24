import styled from 'styled-components';
import media from 'utils/media';

const LineUpText = styled.figcaption`
  padding: 1.5em;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.25em;
  backface-visibility: hidden;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  font-weight: 900;
  

  ${media.tablet`
    p {
      font-size: 65%;
      margin-top: 30%;
    }

    h2 {
      font-size: 0.8em;
    }
  `}

  ${media.laptop`
    h2 {
      font-size: 1em;
    }
  `}

  ${media.desktop`
    h2 {
      font-size: 1.4em;
    }
  `}

  ${media.xl`
    p {
      margin-top: 50%;
    }

    h2 {
      font-size: 1em;
    }
  `}

  ${media.xxl`
    p {
      margin-top: 60%!important;
    }

    h2 {
      font-size: 1.2em;
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
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
  }

  h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    transition: transform 0.35s;
    text-shadow: 0 0 4px grey;
  }

  h2, p {
    font-weight: 900;
  }

  p {
    letter-spacing: 1px;
    padding: 0.7em;
    opacity: 0;
    transition: opacity 0.35s, transform 0.35s;
    transform: scale(1.5);
    margin-top: 40%;
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

    p {
      background-color: white;
      color: black;
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

export default LineUpText;
import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL}/background.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;

`;

const Background = () => {
  return <BackgroundContainer />;
};

export default Background;

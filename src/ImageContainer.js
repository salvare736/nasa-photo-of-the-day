import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  /* flex-flow: row wrap;
  justify-content: center;
  align-content: center; */
`

const StyledText = styled.p`
  color: ${pr => pr.theme.secondaryColor};
  font-weight: bold;
  width: 25%;

  &:hover {
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.quaternaryColor};
    transition: all 1.5s ease-in-out;
  }

  transition: all .75s ease-in-out;
`

const ImageContainer = (props) => {
  // decide what props are needed!
  const { nasaImage } = props;

  return (
    <StyledContainer>
      <StyledText>This is NASA's photo of the day!</StyledText>
      <img src={nasaImage} alt='Nasa'/>
    </StyledContainer>
  );
};

export default ImageContainer;

import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: ${pr => pr.theme.quaternaryColor};
  padding-bottom: 2%;
  border: 5px dotted ${pr => pr.theme.black};
`

const StyledText = styled.p`
  color: ${pr => pr.theme.secondaryColor};
  font-weight: bold;
  max-width: 95%;
  padding: 1%;

  &:hover {
    color: ${pr => pr.theme.primaryColor};
    background-color: ${pr => pr.theme.white};
    border: 10px double ${pr => pr.theme.tertiaryColor};
    transition: all 1s ease-in-out;
  }

  transition: all .5s ease-in-out;
`

const StyledImage = styled.img`
  max-width: 95%;
`

const ImageContainer = (props) => {
  // decide what props are needed!
  const { nasaImage } = props;

  return (
    <StyledContainer>
      <StyledText>This is NASA's photo of the day!</StyledText>
      <StyledImage src={nasaImage} alt='Nasa'/>
    </StyledContainer>
  );
};

export default ImageContainer;

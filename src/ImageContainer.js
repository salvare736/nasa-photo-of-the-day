import React from "react";

const ImageContainer = (props) => {
  // decide what props are needed!
  const { nasaImage } = props;

  return (
    <div className='data-container-wrapper'>
      <p>This is NASA's photo of the day!</p>
      <img src={nasaImage} alt='Nasa'/>
    </div>
  );
};

export default ImageContainer;

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import ImageContainer from './ImageContainer';

function App() {
  const [nasaImage, setNasaImage] = useState(null)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=1Bd6M1bcqao9GadvVh2Ur2KCceHd3JFL7GJvlI8h')
      .then(res => {
        setNasaImage(res.data.hdurl);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <ImageContainer nasaImage={nasaImage}/>
    </div>
  );
}

export default App;

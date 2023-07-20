import { useRef } from "react";

import AudioMp3 from "../src/audio/Tom Odell - Another Love (Explicit Edit).mp3";
import "./App.css";

import Button from "./UI/Button";


function App() {
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const pauseAudio = () => {
    audioRef.current.pause();
  };
  return (
    <div className="App">
      <h1 style={{color:"white"}}>Audio Player</h1>
      <audio ref={audioRef} controls>
        <source src={AudioMp3} type="audio/mpeg" />
      </audio>
      <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
        <Button onClick={playAudio}>Play</Button>
        <Button onClick={pauseAudio}>Pause</Button>
      </div>
    </div>
  );
}

export default App;






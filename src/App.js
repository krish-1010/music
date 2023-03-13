import "./App.css";
// import AudioPlayer from "react-modern-audio-player";
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const FullplayList = [
  {
    name: "music - 1",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
    src: "https://drive.google.com/uc?export=download&id=1EIyZgGUuXlYuVsn_piSbIgixejCmX7_A",
    id: 1,
  },
  {
    name: "music - 2",
    writer: "react-modern-audio-player",
    img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
    src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
    id: 2,
  },
];

function App() {
  function playSong() {}

  function play1(currentSong) {
    // setfirst(!first);
    // console.log(song);
    const s = currentSong.src;
    setSong(s);
  }

  function second() {
    song = {
      name: "music - 2",
      writer: "react-modern-audio-player",
      img: "https://cdn.pixabay.com/photo/2021/09/06/16/45/nature-6602056__340.jpg",
      src: "https://cdn.pixabay.com/audio/2022/08/04/audio_2dde668d05.mp3",
      id: 2,
    };
  }

  const [first, setfirst] = useState(false);
  const [song, setSong] = useState("");
  // let song = [
  //   {
  //     name: "music - 1",
  //     writer: "react-modern-audio-player",
  //     img: "https://cdn.pixabay.com/photo/2021/11/04/05/33/dome-6767422_960_720.jpg",
  //     src: "https://cdn.pixabay.com/audio/2022/08/23/audio_d16737dc28.mp3",
  //     id: 1,
  //   },
  // ];
  return (
    <div className="App">
      <button onClick={() => play1(FullplayList[0])}>first song</button>
      <button onClick={() => play1(FullplayList[1])}>second song</button>
      <AudioPlayer
        autoPlay
        src={song}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </div>
  );
}

export default App;

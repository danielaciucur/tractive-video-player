import React from "react";
import { useState, useRef } from "react";

import tractiveVideo from "../../assets/tractive-video.mp4";
import { formatTime } from "../../utils/time-format";

import { Container } from "@mui/material";
import ReactPlayer from "react-player";

import Control from "../../components/control/control.component";
import "./video-player.styles.scss";

function VideoJS() {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    played: 0,
  });

  const { playing, muted } = videoState;

  const currentTime = formatTime(
    videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : "00:00"
  );
  const duration = formatTime(
    videoPlayerRef.current ? videoPlayerRef.current.getDuration() : "00:00"
  );

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const muteHandler = () => {
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const progressHandler = (state) => {
    setVideoState({ ...videoState, played: videoState.played });
  };

  return (
    <Container className="video_container" maxWidth="md" justify="center">
      <div className="player__wrapper">
        <ReactPlayer
          ref={videoPlayerRef}
          width="100%"
          height="100%"
          className="player"
          url={tractiveVideo}
          muted={muted}
          onProgress={progressHandler}
          playing={playing}
        />
        <Control
          controlRef={controlRef}
          onPlayPause={playPauseHandler}
          playing={playing}
          duration={duration}
          mute={muted}
          onMute={muteHandler}
          currentTime={currentTime}
        />
      </div>
    </Container>
  );
}

export default VideoJS;

import React from "react";
import tractiveVideo from "../../assets/tractive-video.mp4";
import poster from "../../assets/dog-gps-tracking.png";
import "./video-player.styles.css";
import Control from "../../components/control/control.component";
import { Container, darkScrollbar } from "@mui/material";
import { useState, useRef } from "react";
import ReactPlayer from "react-player";


function VideoJS() {
  const videoPlayerRef = useRef(null);
  const controlRef = useRef(null);

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
    buffer: true,
  });

  //Destructuring the properties from the videoState
  const { playing, muted, volume, playbackRate, played, seeking, buffer } =
    videoState;

  const formatTime = (time) => {
    //formarting duration of video
    if (isNaN(time)) {
      return "00:00";
    }

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    if (hours) {
      //if video has hours
      return `${hours}:${minutes.toString().padStart(2, "0")} `;
    } else return `${minutes}:${seconds}`;
  };

  const currentTime = videoPlayerRef.current
    ? videoPlayerRef.current.getCurrentTime()
    : "00:00";
  const duration = videoPlayerRef.current
    ? videoPlayerRef.current.getDuration()
    : "00:00";

  const formatCurrentTime = formatTime(currentTime);
  const formatDuration = formatTime(duration);

  const playPauseHandler = () => {
    //plays and pause the video (toggling)
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const muteHandler = () => {
    //Mutes the video player
    setVideoState({ ...videoState, muted: !videoState.muted });
  };

  const progressHandler = state => {
    setVideoState({ ...videoState, played: videoState.played });
  }

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
            volume={volume}
            onProgress={progressHandler}
            config={{
              files: { 
                attributes: { 
                  poster: '../../assets/dog-gps-tracking.png' 
                } 
              } 
            }}
            playing={playing}
          />
          <Control
            controlRef={controlRef}
            onPlayPause={playPauseHandler}
            playing={playing}
            duration={formatDuration}
            mute={muted}
            volume={volume}
            onMute={muteHandler}
            currentTime={formatCurrentTime}
          />
        </div>
      </Container>
  );
};

export default VideoJS;

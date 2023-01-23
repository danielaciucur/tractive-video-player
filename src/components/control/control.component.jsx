import { BiPauseCircle } from "react-icons/bi";
import { BiPlayCircle } from "react-icons/bi";
import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";

import "./control.styles.scss";

const Control = ({
  onPlayPause,
  playing,
  duration,
  currentTime,
  onMute,
  mute,
  controlRef,
}) => {
  return (
    <div className="control_container" ref={controlRef}>
      <div className="control__box">
        <div className="play_btn" onClick={onPlayPause}>
          {playing ? <BiPauseCircle size="2em" /> : <BiPlayCircle size="2em" />}{" "}
        </div>

        <div className="volume_btn">
          <span>
            {currentTime} / {duration}
          </span>
          <div onClick={onMute}>
            {mute ? <GiSoundOff size="2em" /> : <GiSoundOn size="2em" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;

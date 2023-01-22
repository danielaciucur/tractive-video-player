import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledSharpIcon from '@mui/icons-material/PauseCircleFilledSharp';import './control.styles.css';

const Control = ({
    onPlayPause,
    playing,
    duration,
    currentTime,
    volume,
    controlRef
  }) => {  
    return (
      <div className="control_Container" ref ={controlRef}>
          <div className="control__box">
              
              <div className="icon__btn" onClick={onPlayPause}>
                {playing ? (
                  <PauseCircleFilledSharpIcon fontSize="large" />
                ) : (
                  <PlayCircleFilledSharpIcon fontSize="large"/>
                )}{" "}
              </div>   
              <span>{ currentTime} / {duration}</span>
                   
            </div>
      </div>
    );
  };
  
  export default Control;
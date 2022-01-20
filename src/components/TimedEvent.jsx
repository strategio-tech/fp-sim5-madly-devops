import React, { useRef, useState } from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
function TimedEvent(props) {
  //keep track of time left in countdown and set state accordingly
  const [countdown, setCountdown] = useState({
    Days: "",
    Hours: "",
    Minutes: "",
    Seconds: ""
  });
  const componentMounted = useRef(true);
  //set timeOver when countdown finished
  const [timeOver, setTimeOver] = useState(false);
  const { width, height } = useWindowSize();
  //target date
  const date = new Date(props.date + " " + props.time).getTime();
  let last = 0;
  let requestId = 0;
  function render(now) {
    //  each second call the adjustDate() function
    if (!last || now - last >= 1000) {
      last = now;
      adjustDate();
    }
  }
  //calculate Time Left until given date
  function adjustDate() {
    const now = new Date().getTime();
    const timeLeft = date - now;
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    //only setCountdown while there is time left and the component still exists
    if (timeLeft > 0 && componentMounted.current) {
      setCountdown({
        Days: days,
        Hours: hours,
        Minutes: minutes,
        Seconds: seconds
      });
      requestId = requestAnimationFrame(render);
    } else {
      //set Time over only once
      if (componentMounted.current) setTimeOver(true);
      componentMounted.current = false;
    }
  }
  requestId = requestAnimationFrame(render);

  return (
    <div className="noteContainer" style={{ backgroundColor: props.color }}>
      <h1>{props.name}</h1>
      <div className="countdownDisplay">
        <h3 className="digit">{countdown.Days}</h3>
        <p>Days</p>
      </div>
      <div className="countdownDisplay">
        <h3 className="digit">{countdown.Hours}</h3>
        <p>Hours</p>
      </div>
      <div className="countdownDisplay">
        <h3 className="digit">{countdown.Minutes}</h3>
        <p>Minutes</p>
      </div>
      <div className="countdownDisplay">
        <h3 className="digit seconds">{countdown.Seconds}</h3>
        <p>Seconds</p>
      </div>
      <br />
      <button
        onClick={() => {
          cancelAnimationFrame(requestId);
          componentMounted.current = false;
          props.removeEvent({
            eventName: props.name,
            eventDate: props.date,
            eventTime: props.time,
            id: props.id,
            color: props.color
          });
        }}
      >
        <HighlightOffIcon style={{ fontSize: 40 }} />
      </button>
      {timeOver && <Confetti width={width} height={height} />}
    </div>
  );
}
export default TimedEvent;

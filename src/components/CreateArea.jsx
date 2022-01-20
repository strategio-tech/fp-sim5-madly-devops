import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { green } from "@material-ui/core/colors";
import Zoom from "@material-ui/core/Zoom";
import Color from "./Color";
function CreateArea(props) {
  //keep state for visibility of form items, we want to keep them hidden upon arrival
  const [visibility, setVisibility] = useState("none");
  const [event, setEvent] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    color: ""
  });
  //keep state of chosen color for background
  const [chosen, setChosen] = useState("#f2f2f");
  const colors = [
    "#34be82",
    "#FFBC97",
    "#B2F9FC",
    "#EFB7B7",
    "#F05454",
    "#B983FF"
  ];
  //update corresponding event values upon input change
  function handleInput(event) {
    const { name, value } = event.target;
    setEvent((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function displayErrorMessage() {
    let error = document.getElementById("error");
    error.textContent = "Please enter a date";
    error.style.color = "red";
  }
  function clearErrorMessage() {
    let error = document.getElementById("error");
    error.textContent = "";
  }
  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>CountDown Timer</h1>
        <input
          name="eventName"
          type="text"
          onClick={() => setVisibility("block")}
          placeholder="Event Name"
          onChange={handleInput}
          value={event.eventName}
        />
        <input
          name="eventDate"
          type="date"
          style={{ display: visibility }}
          onChange={handleInput}
          value={event.eventDate}
        />
        <input
          name="eventTime"
          type="time"
          style={{ display: visibility }}
          onChange={handleInput}
          value={event.eventTime}
        />
        <span id="error"></span>
        <span style={{ display: visibility }}>
          <h4>Choose a color:</h4>
          {colors.map((c) => (
            <Color
              key={c}
              color={c}
              onClick={() => {
                setChosen(c);
                setEvent((prevValue) => {
                  return {
                    ...prevValue,
                    color: c
                  };
                });
              }}
              active={c === chosen}
              value={event.color}
            />
          ))}
        </span>
        <br />
        {/* Only zoom in when visibility is set to block */}
        <Zoom in={visibility === "block" && true}>
          <Fab
            onClick={() => {
              if (event.eventDate === "") displayErrorMessage();
              else {
                clearErrorMessage();
                props.addEvent(event);
                setEvent({
                  eventName: "",
                  eventDate: "",
                  eventTime: "",
                  color: ""
                });
                setChosen("#f2f2f");
                setVisibility("none");
              }
            }}
            type="submit"
            style={{ color: green[500] }}
          >
            <AddIcon fontSize="large" />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;

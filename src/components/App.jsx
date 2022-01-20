import React, { useState, useEffect } from "react";
import Header from "./Header";
import TimedEvent from "./TimedEvent";
import CreateArea from "./CreateArea";
import axios from "axios";
function App() {
  const [events, setEvents] = useState([]);
  const url ="http://localhost:3001"
  useEffect(()=>{
    axios.get(url+"/timers")
    .then(res=>{
      console.log(res.data);
      setEvents(res.data);
    })
  },[]);
  function addEvent(event) {
    setEvents((prevEvents) => [...prevEvents, event]);
    axios.post(url+"/timers",event)
    .catch((err)=>console.log(err))
    console.log(event);
  }
  function removeEvent(event) {
    setEvents((prevEvents) => prevEvents.filter((e, i) => i !== event.id));
    axios.delete(url+"/timer",{data:{eventName:event.eventName,eventDate:event.eventDate,eventTime:event.eventTime,color:event.color}})
    .catch(err=>console.log(err));
  }
  return (
    <div>
      <Header />
      <CreateArea addEvent={addEvent} />
      {events.map((event, index) => (
        <TimedEvent
          name={event.eventName}
          id={index}
          key={
            event.eventName + event.color + event.eventDate + event.eventTime
          }
          removeEvent={removeEvent}
          date={event.eventDate}
          color={event.color}
          time={event.eventTime}
        />
      ))}
    </div>
  );
}

export default App;

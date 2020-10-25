import React, { useState } from 'react';
import './Room.css';

function Room() {

    function ToggleLight(){
        console.log("Toggle Light Button clicked.");
        setLit(!isLit);
    }

    function UpdateAge(){
        console.log("Update Age Button clicked.");
        setAge(++Age);
    }

    function setLightOn(){
      console.log("Light On button clicked.");
      setLit(true);
    }

    function setLightOff(){
      console.log("Light Off button clicked.");
      setLit(false);
    }

    function incTemperature(){
      setTemperature(++Temperature);
    }

    function decTemperature(){
      setTemperature(--Temperature);
    }

    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit,setLit] = useState(false);
    let [Age, setAge] = useState(20);
    let [Temperature, setTemperature] = useState(22);
  return (
    <div className = {`room ${isLit ? "lit" : "dark"}`}>
     This room is {isLit ? 'lit' : 'dark'}.
     <br/>
     My age is {Age} years.
     <br/>
     <button onClick={ToggleLight}>Toggle Light</button>
     <button onClick={UpdateAge}>Update Age</button>
     <br/>
     This is the code to turn the light on and off.
     <br/>
     The light is now {isLit ? 'on' : 'off'}.
     <br/>
     <button onClick={setLightOn}>On</button>
     <button onClick={setLightOff}>Off</button>
     <br/>
     The current temperature is {Temperature} celcius.
     <br/>
     <button onClick={incTemperature}>+</button>
     <button onClick={decTemperature}>-</button>
    </div>
  );
}

export default Room;

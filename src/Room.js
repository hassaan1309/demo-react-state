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

    //const state = useState(true);
    //console.log("State = ",state);
    let [isLit,setLit] = useState(false);
    let [Age, setAge] = useState(20);
  return (
    <div className = {`room ${isLit ? "lit" : "dark"}`}>
     This room is {isLit ? 'lit' : 'dark'}.
     <br/>
     My age is {Age} years.
     <br/>
     <button onClick={ToggleLight}>Toggle Light</button>
     <button onClick={UpdateAge}>Update Age</button>
    </div>
  );
}

export default Room;

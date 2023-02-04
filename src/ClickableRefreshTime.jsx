import React, { useState } from "react";

const Clickable = () =>  
{
    let newTime = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(newTime);
    
    const UpdateTime = () =>
    {
       let newTime = new Date().toLocaleTimeString();
        setCurrentTime(newTime);

    }
    return (
        <>
        <h1> {currentTime} </h1>
        <button onClick={UpdateTime} >Get Time</button>
        </>
    )
}

export default Clickable;
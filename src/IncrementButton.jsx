import React, { useState } from "react";



const IncrementButton = () => 
{
    const state = useState();
    console.log(state);
    
    const [count, setCount] = useState(0);
    const IncNum = () =>{
    setCount(count+1);
    //  console.log("clicked" + count++);
};

    return (
        <>
        <h1> {count} </h1>
        <button onClick={IncNum}> CLICK ME </button>
        </>
    );

};

export default IncrementButton;
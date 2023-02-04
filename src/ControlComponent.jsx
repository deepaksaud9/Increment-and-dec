import React, { useState } from "react";

const ControlComp = () =>
{
    const [name, setName] = useState("");
    const [fullName,setFullName]=useState(name);
   
    const inputEvent = (event) =>
    {
        //console.log(event.target.value);
        setName(event.target.value)
    }

    const onSubmit = () =>
    {
        setFullName(name);
    }
    return(
        <>
        <div className = "container">
        <h1> Hello { fullName } </h1>
        <input type="text" onChange={inputEvent} value={name} placeholder="Enter Your Name" className="input-field"/>
        <button onClick={ onSubmit }> Submit </button>
        </div>
        </>
    );
};

export default ControlComp;
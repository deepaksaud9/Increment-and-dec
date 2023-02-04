import React, { useState } from 'react';

const Event = () =>
{   
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    
    const bgChange = () =>
    {
        let newBg = "#34495e";
        setBg(newBg);
        setName("ouch");
        //console.log("clicked"); 
    };
    const bgBack = () => 
    {
        setBg(purple);
        setName("Double Clicked")
    };
    return ( 
        <>
        <div style={ {backgroundColor: bg } }>
            <button onMouseEnter = {bgChange} onMouseLeave = { bgBack }> {name} </button>
        </div>

        </>
    );

};

export default Event;
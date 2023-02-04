import React from "react";

const SlotM = (props) =>
{
    let x = props.x;
    let y = props.y;
    let z = props.z;


if ( x === y && y === z ){
    return(
        <>
        <div className="slot_inner">
            <h1> {x} {y} {z} </h1>
            <h1> This is Matching. </h1>
            <hr />
        </div>
        </>)
}else{
    return(
        <>
        <div className="slot_inner">
            <h1> {x} {y} {z} </h1>
            <h1> This is not Matching. </h1>
            <hr />
        </div>
        </>
    )
}}
const SlotMachine = () =>
{
    return(
    <>
        <h1 className="heading_style"> Welcome to <span style={{fontweight : 'bold'}}> Slot machine game</span></h1>
        <div className="slotmachine">
        <SlotM x=':smile' y=':smile' z=':angry'/>
        <SlotM />
        <SlotM />
        <SlotM />
        </div>
    </>
    )

}

export default SlotMachine;
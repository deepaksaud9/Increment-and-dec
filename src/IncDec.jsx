import React, { useState } from "react";

const IncrDec = () =>{
const [num, setNum] = useState(0);

const incNum = () =>{
    setNum(num+1)
}

const decNum = () =>{
    if(num<=0)
    {
        return  alert("0 limit Reached");
    }else
   {
    setNum(num-1);
   }

}

    return(
        <>
        <div className="main_div">  
            <div className="center_div">
                 <h1 className="headingIncDec"> {num} </h1>
                 <div className="buttt0n_div">
                    <button onClick={incNum} className="btnIncDec">Increm</button>
                    <button onClick={decNum} className="btnIncDec">Decrem</button>
                 </div>
            </div>
        </div>
        </>
    )
}

export default IncrDec;
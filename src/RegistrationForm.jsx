import React, { useState } from "react";

const RegForm = () =>
{
    const [fullName, setFullName] = useState({ 
        fname: '',
        lname: '',
        email: '',
        phone: '',
        qua: ''
    } );

    const inputEvent = (event) =>
    {
        console.log(event.target.value);
        console.log(event.target.name)
        // setName(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } =event.target;

setFullName( (preValue) => 
{
    return{
        ...preValue,
        [name]: value, 
    }
    // console.log(preValue);
    // if(name === "fName")
    // {
    //     return{
    //         fname: value,
    //         lname: preValue.lname,
    //         email: preValue.email,
    //         phone: preValue.phone
    //     };
    // }else if(name === "lName")
    // {
    //     return{
    //         fname: preValue.fname,
    //         lname: value,
    //         email: preValue.email,
    //         phone: preValue.phone
    //     }
    // }else if(name === "email")
    // {
    //     return{
    //         fname: preValue.fname,
    //         lname: preValue.lname,
    //         email: value,
    //         phone: preValue.phone 
    //     }
    // }else if(name === "phone")
    // {
    //     return{
    //         fname: preValue.fname,
    //         lname: preValue.lname,
    //         email: preValue.email,
    //         phone: value 
    //     }
    // }
})
    };
    const onSubmits = (event) => {
        event.preventDefault();
        alert("from submitted");
    };
    return(
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>hello {fullName.fname} {fullName.lname} </h1>
                        <h3> {fullName.email} {fullName.phone}  {fullName.qua}</h3>
                        <input type="text" name="fname" placeholder="Enter your Name" onChange={inputEvent} value={fullName.fname} autoComplete="off" /><br />
                        <input type="text" name="lname" placeholder="Enter your Last Name" onChange={inputEvent} value={fullName.lname} autoComplete="off" />
                        <input type="email" name="email" placeholder="Enter your email address" onChange={inputEvent} value={fullName.email} autoComplete="off" />
                        <input type="number" name="phone" placeholder="Enter your phone number" onChange={inputEvent} value={fullName.phone} autoComplete="off" />
                        <input type="text" name="qua" placeholder="Enter your phone Qualification" onChange={inputEvent} value={fullName.qua} autoComplete="off" />
                        <button type="submit"> Submit me</button>
                    </div>

                </form>
            </div>
        </> 
    );
};

export default RegForm;
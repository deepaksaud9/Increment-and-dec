import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () => 
{


    return(
        <Card 
        key = {Sdata[2].id}
        imgsrc = {Sdata[2].imgscr}
        title = {Sdata[2].title} 
        sname = {Sdata[2].sname}
        link = {Sdata[2].links}
        />
        );

}

export default Amazon;
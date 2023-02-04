import React from "react";
import Heading from "./Heading";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import "./OTT";


const fav_series = 'amazon';

// const FavSeries = () => {
// if(fav_series === 'netflix')
// {
//    return <Netflix />;
// }
// else
// {
//     return <Amazon />
// }
// };

const OTT = () => (
    <>
    <Heading />
     {/* <FavSeries /> */}
     {(fav_series === "netflix") ? <Netflix /> : <Amazon />}
  </>
);

export default OTT;
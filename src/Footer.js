import React from "react";
import { useSelector } from "react-redux";
function Footer(){
    const usename1=useSelector((state) => state.user.food);
    return(
        <div id="footer">{usename1}</div>
    )
}
export default Footer;
import React from "react";

function content(){
    const handleChange =(e)=>{
    
        alert("Hey! Bot");
      
    }
    return(
        <div id="content">
               <input id='name' type="text" placeholder="ENTER YOUR NAME" /><br/><br/>
         <input id="submit" type="submit" value="submit" onClick={(e) =>{handleChange(e)}} /></div>
       

    )
}
export default content;
import {React, useState} from 'react';
import ReactDOM from 'react-dom';
 

function content(){
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(document.getElementById('name').value)
    console.log(document.getElementById('name').value); 
  }
  
    return(
        <div id="content">
              <form onClick={handleSubmit}>
               <input id='name' type="text" placeholder="ENTER YOUR NAME" /><br/><br/>
         <input id="submit" type="submit" value="submit" />
         </form>
         </div>
       

    )
}
export default content;
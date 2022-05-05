
import React, { useState } from "react";
import './App.css';
import Header from "./header";
import Footer from "./footer";
import Side from "./side";
import Content from "./content";


function App() {

  const[name, setName] = useState("Mithup");

  return (
    <div className="App">
       <Header name={name}/> 
       <div id="content-side">
        <Side/>
        <Content/>
       </div>
       <Footer name={name}/>
     
       
    </div>
  );
}

export default App;

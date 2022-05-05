import React from "react";
import './App.css';
import Header from "./header";
import Footer from "./footer";
import Side from "./side";
import Content from "./content";


function App() {
  return (
    <div className="App">
       <Header/> 
       <div id="content-side">
        <Side/>
        <Content/>
       </div>
       <Footer/>
     
       
    </div>
  );
}

export default App;

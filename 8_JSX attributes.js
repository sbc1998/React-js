import React from "react";
import ReactDOM from "react-dom";

const container= document.getElementById("root");
const root= ReactDOM.createRoot(container);

//Links
const img1= "https://picsum.photos/200/300";
const img2= "https://picsum.photos/210/300";
const link= "https://www.w3schools.com/REACT/react_jsx.asp";

root.render (
    <>
        <h1 className="text"> Images: </h1>
        <img src= {img1} alt="random"/> 
        <a href= {link}>  <img src= {img2} alt="random2"/> </a>
        
    </>
)

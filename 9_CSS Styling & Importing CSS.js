import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const container= document.getElementById("root");
const root= ReactDOM.createRoot(container);

//Links
const img1= "https://picsum.photos/210/300";
const img2= "https://picsum.photos/220/300";
const img3= "https://picsum.photos/230/300";
const link= "https://www.w3schools.com/REACT/react_jsx.asp";

root.render (
    <>
        <h1 className="heading"> React Images: </h1>
        <div className="img-div">
            <img src= {img1} alt="random1"/> 
            <a href= {link}>  <img src= {img2} alt="random2"/> </a>
            <img src={img3} alt="random1" />
        </div>
    </>
)

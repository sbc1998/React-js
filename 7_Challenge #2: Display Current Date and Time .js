// Display Current Date and Time in JSX

import React from "react";
import ReactDOM from "react-dom";

const container= document.getElementById("root");
const root= ReactDOM.createRoot(container);

const name= "Tim Bergling";
const d= new Date();
let date= d.toLocaleDateString();
let time= d.toLocaleTimeString();

root.render (
    <>
        <h1> Hello, My name is  {name} </h1>
         <p> Current Date is  {date}. </p>
         <p> Current Time is  {time}. </p>   
    </>
)

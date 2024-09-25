// to render multiple elements
import React from "react";
import ReactDOM from "react-dom";

const container= document.getElementById("root");
const root= ReactDOM.createRoot(container);

root.render(
    <div>
        <h1>Reactjs Tutorial</h1>,
        <p> I am learning React </p>,
    </div> 
)

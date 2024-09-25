import React from "react";
import ReactDOM from "react-dom";

const container= document.getElementById("root");
const root= ReactDOM.createRoot(container);

let fname= "Martin";
let lname= "Garrix";

root.render(
<React.Fragment>
    <h1> Welcome! {` ${fname} ${lname} ${10/2} `} </h1>
</React.Fragment>
)

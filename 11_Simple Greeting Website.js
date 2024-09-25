import React from "react";
import ReactDOM from "react-dom";

const container= document.getElementById('root');

const date= new Date(2024,9,26,1);
const hour= date.getHours();

const cssStyle= {};
let greeting= "";

if(hour>1 && hour<12) {
    greeting="Good Morning!";
    cssStyle.color= "green";
}
else if(hour>=12 && hour<19 ) {
    greeting= "Good Afternoon!";
    cssStyle.color= "yellow";
}
else {
    greeting= "Good Night!";
    cssStyle.color= "gray";
}

ReactDOM.render(<h1 style= { {textAlign: 'center'} }> 
    Hello Shashank, <span style={cssStyle}> {greeting} </span> 
    </h1>, 
    container);

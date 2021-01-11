import React from "react";
import StylesWrapper from '../HOC/StylesWrapper'

// Here it will come when wrapper HOC component will add on properties

function Button(props) {
  debugger;
  return <>
    <button style={props.style}> I am {props.textValue} Button</button>
  </>
}

// Your Component will be passed to StylesWrapper Component which is a HOC componnet
export default StylesWrapper(Button);


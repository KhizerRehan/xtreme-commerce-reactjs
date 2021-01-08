import React from "react";
import StylesWrapper from '../HOC/StylesWrapper'


function Button(props) {
  debugger;
  return <>
    <button style={props.style}> I am {props.textValue} Button</button>
  </>
}

export default StylesWrapper(Button);


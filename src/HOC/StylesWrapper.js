const StylesTransformer = (props) => {

  const styles = {
    default : {
      backgroundColor: "green",
      padding        : "20px",
      fontSize       : "20px",
      minWidth       : "220px"
    },
    disabled: {
      backgroundColor: 'grey',
      opacity        : "0.3"
    },
    hoc     : {
      backgroundColor: 'red',
      fontStyle      : 'italic'
    }
  }

  let buttonStyles = { ...styles.default };
  if (props.disabled) {
    buttonStyles = { ...buttonStyles, ...styles.disabled };
  }

  if (props.value === 'HOC') {
    buttonStyles = { ...buttonStyles, ...styles.hoc };
  }
  return { ...props, style: { ...buttonStyles } };
}

const getButtonTextBasedOnProps = (props) => {
  let newProps;
  if (props.hasOwnProperty('disabled')) {newProps = {
      textValue: props.disabled ? 'Disabled' : 'Normal'
    }
  }
  else if (props.hasOwnProperty('value')) {
   let value;
    if (props.value === 'HOC') {
     value = 'HOC';
   }
    else if (props.value === 'NEW') {
      value = 'NEW'
    }

    newProps = {
      textValue: value
    }
  }
  else {
    newProps = {
      textValue: 'Default'
    }
  }

  return {
    ...props,
    ...newProps
  }
}


const StylesWrapper = (WrappedComponent => {

  return (
    (props) => {
      debugger;
      const updatedProps = getButtonTextBasedOnProps(props);
      return WrappedComponent(StylesTransformer(updatedProps));
    }
  )
});

export default StylesWrapper;

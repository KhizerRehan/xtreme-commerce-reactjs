import React, { Component } from 'react';

class Counter extends Component {

  constructor(props) {
    super();
    this.state = {
      counter: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount called');
  }

  static getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('previousProps', prevProps);
    console.log('previousState', prevState);
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }


  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevPropsq, prevState, snapshot) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  onIncrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 5
      }
    })
  }

  onDecrement = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 5
      }
    })
  }

  render() {
    console.log('Render called');
    return <>
      <h1>{this.state.counter}</h1>
      <button onClick={this.onIncrement}>Increment</button>
      <button onClick={this.onDecrement}>Decrement</button>
    </>
  }
}

export default Counter;

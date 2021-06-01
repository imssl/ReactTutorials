import React from 'react';

export default class CounterComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      value: true,
      countOfClicks: 0
    };
    this.pickRandom = this.pickRandom.bind(this);
  }


  pickRandom() {
    console.log("Current state: ",this.state);

    this.setState({
      value: Math.random() > 0.5, // randomly picks true or false
      countOfClicks: this.state.countOfClicks + 1
    });
  }

  // comment out the below to re-render on every click
  shouldComponentUpdate(nextProps, nextState) {  
    console.log("Current state: ",this.state);
    console.log("next State: ",nextState);   
    return this.state.value != nextState.value; //only update if value changes
  }

  render() {
    console.log("CounterComponent Render ");
    return (
      <div>
        shouldComponentUpdate demo 
        <p><b>{this.state.value.toString()}</b></p>
        <button onClick={this.pickRandom}>
          Click to randomly select: true or false
        </button>
      </div>
    );
  }
}
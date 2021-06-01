import React from 'react';
import ChildrenCounter from './ChildrenCounter.jsx';
import ChildrenMessage from './ChildrenMessage.jsx';


export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'hello',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps===this.props) ||
        !(nextState===this.nextState);
  }

  handleClick = () => {
    this.state.counter++;
    
    //this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };
  render() {
    console.log('ParentComponent rendered');
    return (
      <main>
        State Counter: {this.state.counter} <br />
        State message: {this.state.message} <br />
        <br /> <br />
        ChildrenCounter: <ChildrenCounter counter={this.state.counter} /> <br />
        ChildrenMessage:  <ChildrenMessage message={this.state.message} /> <br />

        <button type='button' onClick={this.handleClick}>Increment</button>
      </main>
    );
  }
}
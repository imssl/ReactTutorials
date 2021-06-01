import React from 'react';

export default class ChildrenMessage extends React.PureComponent {
  render() {
    console.log('ChildrenMessage rendered');
    return (
      <div>{ this.props.message }</div>
    );
  }
}
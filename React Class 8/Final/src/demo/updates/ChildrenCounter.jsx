import React from 'react';


export default class ChildrenCounter extends React.Component {

   

    render() {
        console.log('ChildrenCounter rendered');
        return (
        <div>{ this.props.counter }</div>
        );
    }
}



//Solution 1 override shouldComponentUpdate(newProps, newState)
//   shouldComponentUpdate(newProps, newState) {
//         console.log('ChildrenCounter.shouldComponentUpdate');
//         console.log('data: OldProps',this.props);
//         console.log('data: newProps',newProps);
//         console.log('data: oldState',this.state);
//         console.log('data: newState',newState);
//         return newProps.counter !==this.props.counter;
//     }





//Solution 2 extend PureComponent and rely on shallowCompare
//export default class ChildrenCounter extends React.PureComponent {

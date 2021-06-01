import React from 'react';

export default class ShallowCompareDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          message: 'hello',
          someNestedData:{
              "firstName":"Stefano",
              "lastName":"Fiorenza"
          }
        };
      }

  
    
    render() {

        //TC1: === operator
        /* 
            let newState =this.state
            let newStateInNewObj ={...this.state}; //copy all data in a new object
            console.log("=== Compare both reference and type expected true",(this.state===newState));
            console.log("=== Compare both reference and type expected false",(this.state===newStateInNewObj));
        */

        //TC2: shallow compare
        let newStateInNewObj ={...this.state};      
        newStateInNewObj.message="Greetings"; //shallow will detect this difference
        //newStateInNewObj.someNestedData.firstName="Raul";  //shallow will not detect this change

        console.log("shallowEqual",shallowEqual(this.state,newStateInNewObj)); 
 
        //TC3: deep compare 
        /* 
            could recursively check at all nested level but
            it would be most likely overkilling for performances
        */
      
        return <div>Just watch the console(F12). Nothing relevant here...</div>   
    };

}

function shallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
  }
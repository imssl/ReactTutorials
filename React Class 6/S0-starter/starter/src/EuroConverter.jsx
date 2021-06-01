import React from 'react'
import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';

const changeDollarToEuro =0.832;

export default class EuroConverter extends React.Component {

    constructor(props) {
      
       super(props);
       this.state={
           euro:0.0,
           dollar:0.0          
       }
       this.onChange=this.onChange.bind(this);      
       this.dollarToEuro=this.dollarToEuro.bind(this);  
       this.euroToDollar=this.euroToDollar.bind(this);  
     }

   onChange(e){
       e.preventDefault();
       let newState={...this.state};
       newState[e.target.id]=e.target.value;
       this.setState(newState);
   }

   dollarToEuro(e){
        e.preventDefault();
        let newState={...this.state}; 
        newState.euro=this.state.dollar*changeDollarToEuro;    
        this.setState(newState);     
   }

    euroToDollar(e){
        e.preventDefault();
        let newState={...this.state};   
        newState.dollar=this.state.euro/changeDollarToEuro;   
        this.setState(newState); 
    }


   componentDidMount(){
        console.log("componentDidMount");
   }

   componentDidUpdate(){
    console.log("componentDidUpdate");
   }


   render (){
       console.log("render");

       return (
            <div className="form-group">
                <Row>
                    <RowColumn size="4">                       
                    </RowColumn>
                    <RowColumn size="8">
                        <Row>
                            <RowColumn size="4"> 
                                Dollar
                            </RowColumn>
                            <RowColumn size="8"> 
                                <input id="dollar" type="text" className="form-control col-md-5" 
                                    onChange={this.onChange} value={this.state.dollar} />
                            </RowColumn>
                        </Row>
                        <Row>
                            <RowColumn size="4"> 
                                Euro
                            </RowColumn>
                            <RowColumn size="8"> 
                                <input id="euro" type="text" className="form-control col-md-5" 
                                    onChange={this.onChange} value={this.state.euro} />
                            </RowColumn>
                        </Row>                           
                    </RowColumn>
                </Row>
                <div className="button-container">
                      <Row>
                            <RowColumn size="4">                              
                            </RowColumn>
                            <RowColumn size="8"> 
                                <button id="toEuro" className="btn btn-primary" onClick={this.dollarToEuro} >toEuro</button>
                                <button  id="toDollar"  className="btn btn-primary" onClick={this.euroToDollar} >toDollar</button>
                            </RowColumn>
                     </Row>
                </div>   
            </div>
       )
   }

}
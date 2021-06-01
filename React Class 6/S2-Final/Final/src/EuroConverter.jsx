import React from 'react'
import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import {currencyRate} from './remote/CurrencyService.js'


export default class EuroConverter extends React.Component {

    constructor(props) {
      
       super(props);
       this.state={
           euro:0.0,
           dollar:0.0,
           usd2Eur:0.5          
       }
       this.onChange=this.onChange.bind(this);      
       this.dollarToEuro=this.dollarToEuro.bind(this);  
       this.euroToDollar=this.euroToDollar.bind(this);  
       this.componentDidMount=this.componentDidMount.bind(this);  
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
        newState.euro=this.state.dollar*this.state.usd2Eur;    
        this.setState(newState);     
   }

    euroToDollar(e){
        e.preventDefault();
        let newState={...this.state};   
        newState.dollar=this.state.euro/this.state.usd2Eur;   
        this.setState(newState); 
    }


   async componentDidMount(){
        console.log("componentDidMount");
        let currentUsd2CurrencyChanges= await currencyRate();
        console.log("received : ",currentUsd2CurrencyChanges);

        if(currentUsd2CurrencyChanges.error){
            alert('Could not connect to Server. Please try again later')
        }else{
            let newState={...this.state,"usd2Eur":currentUsd2CurrencyChanges.EUR}; 
            this.setState(newState); 
        }
      
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
                    USD TO EUR Current Exchange Rate: {this.state.usd2Eur}                      
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
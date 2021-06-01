import React from 'react'
import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';

const changeDollarToEuro =0.832;

export default class EuroConverter extends React.Component {

    constructor(props) {
      
       super(props);
       this.state={
           euro:0.0,
           dollar:0.0          
       }
       this.onChange=this.onChange.bind(this);  
     }

     onChange(e){
       e.preventDefault();
       let newState={...this.state};
       newState[e.target.name]=e.target.value;
       this.setState(newState);
   }


   render (){
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
                                <input type="text" className="form-control col-md-5" value="" />
                            </RowColumn>
                        </Row>
                        <Row>
                            <RowColumn size="4"> 
                                Euro
                            </RowColumn>
                            <RowColumn size="8"> 
                                <input type="text" className="form-control col-md-5" value="" />
                            </RowColumn>
                        </Row>                           
                    </RowColumn>
                </Row>
                <div className="button-container">
                      <Row>
                            <RowColumn size="4">                              
                            </RowColumn>
                            <RowColumn size="8"> 
                                <button class="btn btn-primary">toEuro</button>
                                <button class="btn btn-primary">toDollar</button>
                            </RowColumn>
                     </Row>
                </div>   
            </div>
       )
   }

}
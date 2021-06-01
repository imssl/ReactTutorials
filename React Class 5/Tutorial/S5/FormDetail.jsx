import React from 'react'
import Row from './Row.jsx';
import RowColumn from './RowColumn.jsx';
import Card from './Card.jsx';
import {loadEmployees, loadEmployee } from './remote/DataService.js';


export default class FormDetail extends React.Component {

   
    constructor(props) {
         // console.log(loadEmployee(1));
        // console.log(loadEmployees(1));

        super(props);
        this.state={
            firstName:'Stefano',
            lastName:'Fiorenza',
            city:'Napoli',
            email:'stefanofiorenza@email.it'
        }
        this.onChange=this.onChange.bind(this);
   
      }

      onChange(e){
        e.preventDefault();
        let newState={...this.state};
        newState[e.target.name]=e.target.value;
        this.setState(newState);
    }




    render() {
        return (
            <div className="form-group">
                <Row>
                    <RowColumn size="4">
                        <Card title="User Profile" category="" icon="icon-single-02" >
                            <Row>
                                <RowColumn size="4">
                                </RowColumn>
                                <RowColumn size="8">
                                    <input type="text" className="form-control col-md-10" disabled={true} value="" /><br />
                                    <input type="text" className="form-control col-md-10" disabled={true} value="" /><br />
                                    <input type="text" className="form-control col-md-10" placeholder="firstName" value={this.state.firstName} onChange={this.onChange} /><br />
                                    <input type="text" className="form-control col-md-10" placeholder="lastName" value={this.state.lastName} onChange={this.onChange} /> <br />
                                    <input type="text" className="form-control col-md-10" placeholder="city" value={this.state.city} onChange={this.onChange} /> <br />
                                    <input type="text" className="form-control col-md-10" placeholder="email" value={this.state.email} onChange={this.onChange} /> <br />
                                </RowColumn>
                            </Row>

                            <Row>
                                <RowColumn size="3">
                                </RowColumn>
                                <RowColumn size="9">
                                    <div className="card-footer">
                                        <div className="button-container">
                                            <button className="btn btn-primary btn-icon btn-round">
                                                <i className="tim-icons icon-double-left"></i>
                                            </button>
                                            <button className="btn btn-primary btn-icon btn-round ">
                                                <i className="tim-icons icon-minimal-left"></i>
                                            </button>
                                            <span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;</span>
                                            <button className="btn btn-primary btn-icon btn-round ">
                                                <i className="tim-icons icon-minimal-right"></i>
                                            </button>
                                            <button className="btn btn-primary btn-icon btn-round">
                                                <i className="tim-icons icon-double-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </RowColumn>
                            </Row>

                            <Row>
                                <RowColumn size="3">
                                </RowColumn>
                                <RowColumn size="9">
                                <div className="button-container">
                                    <button className="btn btn-primary btn-round">Save</button>
                                    <span> &nbsp; &nbsp; &nbsp; &nbsp; </span>
                                    <button className="btn btn-primary btn-round">Cancel</button>
                                 </div>
                                </RowColumn>
                            </Row>
                        </Card>
                    </RowColumn>
                    <RowColumn size="8">
                        &nbsp;
                </RowColumn>
                </Row>
            </div>
        )
    }

}
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import Contacts from "./Component/contact"
import'./App.scss' 
import { connect } from 'react-redux';
import {getcontact} from './actions/actionfunc'


class App extends Component {

  componentDidMount=()=>{
    this.props.getcontact()
  }
  
  render() { 
    return (
      <div className='container'>
       <div className="card border-primary mt-3">
          <div className="card-header p-0">
            <div className="bg-primary text-white text-center py-2">
               <h3><i className="fa fa-envelope"></i> Contact App</h3>
                </div>
          </div>
       
          <Contacts contactList={this.props.contactList}/>
        
        </div>
         
        </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return {
  contactList:state.contactList
}
} 
export default connect(mapStateToProps , {getcontact}) (App);
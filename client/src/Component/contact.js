import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" ;
import Addcontact from "./addcontact"
import Modifyedcontact from "./Modifycontact"
import { connect } from 'react-redux';
import {getcontact} from '../actions/actionfunc'

class Contacts extends Component {
    render() { 
        return (
            <div className='Card'>                   
             <Addcontact />
             {this.props.contactList.map((el,i)=><Modifyedcontact 
             _id={el._id} 
             name={el.name} 
             phone={el.phone} 
             mail={el.mail}/> 
              )}       
            </div>

      
        );
    }
}
const mapStateToProps = (state) =>{
    return {
    contactList:state.contactList
  }
} 
 
export default connect(mapStateToProps,{getcontact}) (Contacts);
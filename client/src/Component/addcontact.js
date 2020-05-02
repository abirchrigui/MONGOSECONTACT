import React, { Component } from 'react';
import Modal from "react-modal";
import { connect } from 'react-redux';
import {addcontact} from '../actions/actionfunc'

class Addcontact extends Component {
    state = {
        isOpen: false,
        _id:0,
        name: '',
        phone: '',
        mail: '',
        isOpen: false 
        
      };
    
      handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
      close = () => this.setState({ isOpen: false });
      
       handleChange = e =>
       {
          this.setState({
        [e.target.name]: e.target.value.trim() 
        })}
      
    render() { 
        return (
            <div>
                <div className='input-group d-flex justify-content-center'>
                <button className='btn btn-info text-capitalize text-center ml-2 mt-3' onClick={this.handleOpen} >add contact</button>
             </div>
             <div className="bg-light text-black text-center py-2 mt-4">
               <h3><i class="far fa-address-card"></i> Add Contact Page</h3>
                </div>
                <Modal  isOpen={this.state.isOpen}  onRequestClose={this.close}>
                   <form onSubmit={()=>this.props.addcontact(this.state)}>
                <div className="form-group mt-4">
                     <div className="input-group mb-2">
                        <div className="input-group-prepend">
                             <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                         </div>
                    <input type="text" className="form-control" id="nombre" name="name" placeholder="Contact Name" required value={this.state.name} onChange={this.handleChange}></input>
                  </div>
                </div>
                    <div className="form-group">
                        <div className="input-group mb-2">
                             <div className="input-group-prepend">
                                 <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                             </div>
                                <input type="email" className="form-control" id="nombre" name="mail" placeholder="somone@gmail.com" required value={this.state.mail} onChange={this.handleChange}></input>
                                        </div>
                </div>

                    <div className="form-group">
                         <div className="input-group mb-2">
                              <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-phone-square-alt text-info"></i></div>
                                        </div>
                                <input type="text" className="form-control" id="nombre" name="phone" maxlength="8" placeholder="Telephone/Mobile number" required value={this.state.phone} onChange={this.handleChange}></input>
                             </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Submit" className="btn btn-info btn-block py-2" ></input>
                                </div>
                        </form>
                        </Modal>
            </div>
        );
    }
}
 
export default connect(null,{addcontact}) (Addcontact);
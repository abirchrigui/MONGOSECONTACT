import React, { Component } from 'react';
import Modal from "react-modal";
import { connect } from 'react-redux';
import {deletcontact , editcontact} from '../actions/actionfunc' 
class Modifyedcontact extends Component {
    state = {
          isOpen: false,      
          name:this.props.name ,
          mail: this.props.mail ,
          phone:this.props.phone ,
          isOpen: false
        
      };


     handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
     close = () => this.setState({ isOpen: false });
    
     handleChange = e =>
     {
        this.setState({
      [e.target.name]: e.target.value 
      })}

     hundelEDit = ()=>{
       this.props.editcontact(this.props._id ,{
        name:this.state.name ,
        mail: this.state.mail ,
        phone:this.state.phone 
       
       })
     } 
  
    render() { 
        return (
          <div className='mt-4 Card'>
            <div class="container imge-cont"> 
                      <div class="our-team">
                        <div class="picture">
                          <img class="img-fluid" src="https://png.pngtree.com/svg/20170802/f96d8acc9e.png"/>
                       </div>
                          <div class="team-content">
                     <h3 class="name">{this.state.name}</h3>
                     <h6 class="mail">{this.state.mail}</h6>
                    <h6 class="numtel">{this.state.phone}</h6>
                    </div>
                      <ul class="social">
                      <li><span  class="fas fa-trash" aria-hidden="true" onClick={()=>this.props.deletcontact(this.props._id)} ></span></li>
                      <li><span  class="fas fa-pen" aria-hidden="true" onClick={this.handleOpen}></span></li>
                      </ul>
                    </div>
                 </div>
             
                <div className>   
                    <Modal  isOpen={this.state.isOpen}  onRequestClose={this.close}>
                    <form onSubmit={this.hundelEDit()}>
                <div className="form-group">
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
                                <input type="text" className="form-control" id="nombre" name="phone" placeholder="Telephone/Mobile number" required value={this.state.phone} onChange={this.handleChange}></input>
                             </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Submit" className="btn btn-info btn-block py-2" ></input>
                                </div>
                        </form>
                        </Modal>
                </div>
            </div>

        );
    }
}
 
export default connect(null,{deletcontact , editcontact}) (Modifyedcontact);
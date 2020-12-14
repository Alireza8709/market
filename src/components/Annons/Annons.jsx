import React, { Component } from 'react';
import { ToastContainer,toast } from 'react-toastify';
import "./Annons.css";


class Annons extends Component {
    state = { 
        isOpen:false,
        inputs:{
          title:"",
          message:""
        },
        errors:{
          title:false,
          message:false
        }
     }

     handleAnnonsClick=()=>{
         this.setState({ isOpen:true });
     }

     handleClose=()=>{
        this.setState({isOpen:false});
    }

    handleChangeInput=(event)=>{
      let errorsTest=this.state.errors;
      errorsTest[event.target.name]=false;

      let test=this.state.inputs;
      test[event.target.name]=event.target.value;
      this.setState({ inputs:test , errors:errorsTest});
    }

    handleSubmit=()=>{
      let test=this.state.errors;
      if(this.state.inputs.title==""){
        test.title=true;
      }

      if(this.state.inputs.message==""){
        test.message=true;
      }

      this.setState({ errors:test});




      let toastOption={
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      };

      if(this.state.inputs.title!=="" && this.state.inputs.message!==""){
        toast.success("Your Annons Successfully Submited!",toastOption);
        this.setState({ isOpen:false });
      }else{
        toast.error("Please Fill All Fields!",toastOption);
      }

    }

    render() { 
        return ( 
            <React.Fragment>
                
            <button onClick={this.handleAnnonsClick} className="btn btn-danger">Lägg in annons</button>
           {this.state.isOpen===true && 
          <div className="modal fade show" style={{display:"block"}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Lägg in annons</h5>
                <button onClick={this.handleClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">Titel:</label>
                    <input onChange={this.handleChangeInput} name="title" type="text" className="form-control" id="recipient-name"></input>
                    { this.state.errors.title && <span className="error">Title field is required!</span>}
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Meddelande:</label>
                    <textarea onChange={this.handleChangeInput} name="message" className="form-control" id="message-text"></textarea>
                    { this.state.errors.message && <span className="error">Message field is required!</span>}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button onClick={this.handleSubmit} type="button" className="btn btn-danger">Lägg upp annons</button>
              </div>
            </div>
          </div>
        </div>
         }
            <ToastContainer></ToastContainer>
            </React.Fragment>
         );
    }
}
 
export default Annons;
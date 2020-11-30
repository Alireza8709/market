import React, { Component } from 'react';
import "./Annons.css";


class Annons extends Component {
    state = { 
        isOpen:false
     }

     handleAnnonsClick=()=>{
         this.setState({ isOpen:true });
     }

     handleClose=()=>{
        this.setState({isOpen:false});
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
                    <input type="text" className="form-control" id="recipient-name"></input>
                  </div>
                  <div className="form-group">
                    <label for="message-text" className="col-form-label">Meddelande:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button onClick={this.handleClose} type="button" className="btn btn-primary">Lägg upp annons</button>
              </div>
            </div>
          </div>
        </div>
         }
           
            </React.Fragment>
         );
    }
}
 
export default Annons;
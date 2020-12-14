import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Annons from '../Annons/Annons';
import Location from '../Location/Location';
import "./Navbar.css";


class Navbar extends Component {
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"  href="/"><img src="./images/logo.jpg"></img></a>
        <Location></Location>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">     
          <Annons></Annons>
            </li>
            <li className="nav-item active">
              <Link to="/om-oss" className="nav-link">Om oss</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/kontakta-oss">Kontakta oss</Link>
            </li>
          </ul>
        </div>
      </nav>
      </React.Fragment>
       );
    }
}
 
export default Navbar;






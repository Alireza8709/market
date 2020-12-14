import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import React, { Component } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Tags from "./components/Tags/Tags";
import AdsContainer from "./components/AdsContainer/AdsContainer";
import SearchBox from "./components/SearchBox/SearchBox";
import { getAds, getCategories, getTags } from "./services/adsData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import KontaktaOss from "./pages/KontaktaOss/KontaktaOss";
import OmOss from "./pages/OmOss/OmOss";

class App extends Component {
  state = {
  
  };



  render() {
    return (
      <Router>
        <Switch>
          
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
        <Route exact path="/om-oss" render={()=><OmOss></OmOss>}></Route>
        <Route exact path="/kontakta-oss" render={()=><KontaktaOss></KontaktaOss>}></Route>
        <Route exact path="/" render={()=> 
        
        <div className="row">
          <div className="col-3"><Sidebar></Sidebar></div>
          <div className="col-9">
             <SearchBox></SearchBox>
            <Tags></Tags>
            <AdsContainer></AdsContainer>
          </div>
        </div> }></Route>
          </div>
          <a href="https://www.freepik.com/vectors/logo">Logo vector created by freepik - www.freepik.com</a>
      </React.Fragment>
      </Switch>
      </Router>
    );
  }
}

export default App;

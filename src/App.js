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
    tags:getTags(),
    categories:getCategories(),
    ads:getAds(),
    listItems:[],
    filterItems:{
      selectedCategoryId:0,
      searchKey:"",
      minPrice:0,
      maxPrice:0,
      hasPicture:false,
      hasChat:false,
      selectedTagId:0
    }
  };

  componentDidMount(){
    this.setState({ listItems:this.state.ads});
  }


HandleChangeKategorier=(categoryId)=>{

  let test= this.state.filterItems;
  test.selectedCategoryId=categoryId;
  
  this.setState({filterItems:test});
  this.customFilter();
}

handleSearchBoxChange=(category,searchKey)=>{

  let test= this.state.filterItems;
  test.selectedCategoryId=(category===0)?category:category.id;
  test.searchKey=searchKey;

  if(category===0){
    test.selectedCategoryId=0;
    test.searchKey="";
    test.minPrice=0;
    test.maxPrice=0;
    test.hasPicture=false;
    test.hasChat=false;
    test.selectedTagId=0;
  }

  this.setState({filterItems:test});
  this.customFilter();
}

handleTagsChange=(tagId)=>{

  let test= this.state.filterItems;
  test.selectedTagId=tagId;
  
  this.setState({filterItems:test});
  this.customFilter();
}

handleChangePrice=(price)=>{
  let test= this.state.filterItems;
  test.minPrice=price.minPrice;

  test.maxPrice=price.maxPrice;
  
  this.setState({filterItems:test});
  this.customFilter();
}

handlePictureSwitchChange=(position)=>{
   let test= this.state.filterItems;

  test.hasPicture=position;
  
  this.setState({filterItems:test});
  this.customFilter();
}


handleChattableSwitchChange=(position)=>{
  let test= this.state.filterItems;

  test.hasChat=position;
  
  this.setState({filterItems:test});
  this.customFilter();
}

customFilter=()=>{

  let test=this.state.ads;

  if(this.state.filterItems.selectedCategoryId!==0){
    test=test.filter( (item)=> item.categoryId===this.state.filterItems.selectedCategoryId );
  }

  if(this.state.filterItems.selectedTagId!==0){
    test=test.filter( (item)=> item.tagId===this.state.filterItems.selectedTagId );
  }

  if(this.state.filterItems.searchKey!==""){
    test=test.filter( (item)=> (item.title.toLowerCase().includes(this.state.filterItems.searchKey.toLowerCase()) || item.location.toLowerCase().includes(this.state.filterItems.searchKey.toLowerCase()) ) );
  }

  if(this.state.filterItems.minPrice!==0 && this.state.filterItems.maxPrice!==0){
    test=test.filter( (item)=> item.price<=this.state.filterItems.maxPrice && item.price>=this.state.filterItems.minPrice );
  }

  if(this.state.filterItems.hasPicture===true){
    test=test.filter( (item)=> item.hasPicture===true );
  }

  if(this.state.filterItems.hasChat===true){
    test=test.filter( (item)=> item.chatActive===true );
  }

  this.setState ({ listItems:test });

}

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
          <div className="col-3"><Sidebar onPicturesSwitchChange={(position)=>this.handlePictureSwitchChange(position)} onChattableSwitchChange={(position)=>this.handleChattableSwitchChange(position)} onChangePriceSidebar={(price)=>this.handleChangePrice(price)} onChangeKategorier={(categoryId)=>this.HandleChangeKategorier(categoryId)} categoriesList={this.state.categories}></Sidebar></div>
          <div className="col-9">
             <SearchBox onChangeBox={(category,searchKey)=>this.handleSearchBoxChange(category,searchKey)} categoriesList={this.state.categories}></SearchBox>
            <Tags onClickTag={(tagId)=>this.handleTagsChange(tagId)} tagsList={this.state.tags}></Tags>
            <AdsContainer adsList={this.state.listItems}></AdsContainer>
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

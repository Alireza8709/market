import React, { Component } from 'react';
import "./SearchBox.css";

class SearchBox extends Component {
    state = { 
        isOpen:false,
        selectedCategory:0,
        searchKey:""
     }

     handleChangeDropDown=()=>{
         this.setState({isOpen: !this.state.isOpen});
     }

     handleListItemClick=(category)=>{
        this.setState({ isOpen:false , selectedCategory:category});
        this.props.onChangeBox(category,this.state.searchKey);
    }

     handleSearchChange=(event)=>{
            this.setState({searchKey:event.target.value });
     }

     handleKeyPressSearch=(event)=>{
         if(event.key==="Enter"){
             this.props.onChangeBox(this.state.selectedCategory,this.state.searchKey);
         }
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className=" border-search">
                <div className="dropdown">
                    <button onClick={this.handleChangeDropDown} className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { (this.state.selectedCategory!==0) ? this.state.selectedCategory.name : "Alla annonser"}
                    </button>
                    <div className={(this.state.isOpen===true)?"dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    <button onClick={()=>this.handleListItemClick(0)}  className="dropdown-item" href="#">Alla annonser</button>
                       {this.props.categoriesList.map((c,index)=> <button onClick={()=>this.handleListItemClick(c)} key={index} className="dropdown-item" href="#">{c.name}</button> )} 
                        
                    </div>
                </div>
                
                        <input onKeyPress={this.handleKeyPressSearch} onChange={this.handleSearchChange} value={this.state.searchKey} type="text" className="form-control searchbox-input" placeholder={ (this.state.selectedCategory===0) ? "Vad vill du söka efter?" : "söka efter "+ this.state.selectedCategory.name }></input>
                 
                </div>
            </React.Fragment>
         );
    }
}
 
export default SearchBox;
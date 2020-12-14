import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./SearchBox.css";
import { chooseCategory, changeSearchBoxText, reset } from '../../store/ActionCreators';

class SearchBox extends Component {
    state = { 
        isOpen:false,
     }

     handleChangeDropDown=()=>{
         this.setState({isOpen: !this.state.isOpen});
     }

     handleMenuItemClick=(cid)=>{
        this.props.handleListItemClick(cid);
        this.setState({isOpen: !this.state.isOpen});
     }


     handleKeyPressSearch=(event)=>{
         if(event.key==="Enter"){
             this.props.onChangeBox(this.props.selectedCategory,this.props.searchKey);
         }
     }

    render() { 
        return ( 
            <React.Fragment>
                <div className=" border-search">
                <div className="dropdown">
                    <button onClick={this.handleChangeDropDown} className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { (this.props.selectedCategory!==0) ? (this.props.categoriesList.find((c)=> c.id==this.props.selectedCategory)).name : "Alla annonser"}
                    </button>
                    <div className={(this.state.isOpen===true)?"dropdown-menu show": "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                    <button onClick={()=>{this.handleMenuItemClick(0); this.props.handleReset() } }  className="dropdown-item" href="#">Alla annonser</button>
                       {this.props.categoriesList.map((c,index)=> <button onClick={()=>this.handleMenuItemClick(c.id)} key={index} className="dropdown-item" href="#">{c.name}</button> )} 
                        
                    </div>
                </div>
                
                        <input onKeyPress={this.handleKeyPressSearch} onChange={this.props.handleSearchChange} value={this.props.searchKey} type="text" className="form-control searchbox-input" placeholder={ (this.props.selectedCategory===0) ? "Vad vill du söka efter?" : "söka efter "+ (this.props.categoriesList.find((c)=>c.id==this.props.selectedCategory)).name }></input>
                 
                </div>
            </React.Fragment>
         );
    }
}

const mapStateToProps=(state)=>({
    searchKey: state.SearchBoxReducer.searchKey,
    selectedCategory: state.CategoriesReducer.selectedCategory,
    categoriesList: state.CategoriesReducer.categoriesList
});

const mapDispatchToProps={
    handleListItemClick: chooseCategory,
    handleSearchChange: changeSearchBoxText,
    handleReset: reset
};

 
export default connect(mapStateToProps,mapDispatchToProps) (SearchBox);


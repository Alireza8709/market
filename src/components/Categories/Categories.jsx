import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./Categories.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { chooseCategory, reset } from '../../store/ActionCreators';
import { connect } from 'react-redux';



const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)


class Categories extends Component {
   


    render() { 
        return ( 
            <div className="category-border">
            <strong onClick={()=>{this.props.handleCategoryClick(0); this.props.handleReset()} } className="category-title">Kategorier</strong>
            <ul className="list-group list-group-flush">
                { this.props.categoriesList.map((d,index)=>  <li onClick={()=> this.props.handleCategoryClick(d.id) } key={index} className={ (this.props.selectedCategory===d.id) ? "list-group-item active" : "list-group-item" }><FontAwesomeIcon icon={d.icon}></FontAwesomeIcon>{d.name}</li> )  }
            </ul>
          </div>
         );
    }
}

const mapStateToProps=(state)=>({
    selectedCategory: state.CategoriesReducer.selectedCategory,
    categoriesList: state.CategoriesReducer.categoriesList
});
 

const mapDispatchToProps={
    handleCategoryClick :  chooseCategory,
    handleReset: reset
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);






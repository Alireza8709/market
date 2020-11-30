import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./Categories.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)


class Categories extends Component {
    state = { 
        selectedCategory:0

     };


    handleCategoryClick=(categoryId)=>{
        this.setState({selectedCategory:categoryId});

        this.props.onChangeCategory(categoryId);
    }


    render() { 
        return ( 
            <div className="category-border">
            <strong onClick={()=>this.handleCategoryClick(0)} className="category-title">Kategorier</strong>
            <ul className="list-group list-group-flush">
                { this.props.data.map((d,index)=>  <li onClick={()=>this.handleCategoryClick(d.id)} key={index} className={ (this.state.selectedCategory===d.id) ? "list-group-item active" : "list-group-item" }><FontAwesomeIcon icon={d.icon}></FontAwesomeIcon>{d.name}</li> )  }
            </ul>
          </div>
         );
    }
}
 
export default Categories;






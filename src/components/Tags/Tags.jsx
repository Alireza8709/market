import React, { Component } from 'react';
import "./Tags.css";


class Tags extends Component {
    state = { 
        tagItems:this.props.tagsList,
        selectedTag:""
     }

     handleTagClick=(tagId)=>{
        this.setState({selectedTagId: tagId});
        this.props.onClickTag(tagId);
     }

    render() { 
        return ( 
        this.state.tagItems.map((tag,index)=> <button onClick={ ()=>this.handleTagClick(tag.id)} key={index} className={(this.state.selectedTagId===tag.id) ? "btn btn-tag active" : "btn btn-tag" }>{tag.name}</button> )
         );
    }
}
 
export default Tags;
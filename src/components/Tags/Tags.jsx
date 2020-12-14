import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeTags } from '../../store/ActionCreators';
import "./Tags.css";


class Tags extends Component {
   

    render() { 
        return ( 
        this.props.tagItems.map((tag,index)=> <button onClick={ ()=>this.props.handleTagClick(tag.id)} key={index} className={(this.props.selectedTag===tag.id) ? "btn btn-tag active" : "btn btn-tag" }>{tag.name}</button> )
         );
    }
}

const mapStateToProps=(state)=>({
    tagItems: state.TagsReducer.tagItems,
    selectedTag: state.TagsReducer.selectedTag
});

const mapDispatchToProps={
    handleTagClick: changeTags
}
 
export default connect(mapStateToProps,mapDispatchToProps) (Tags);
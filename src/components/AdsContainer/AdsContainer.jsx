import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePagination, resetPagination } from '../../store/ActionCreators';
import AdsItem from '../AdsItem/AdsItem';
import "./AdsContainer.css";


class AdsContainer extends Component {
    
  state={
    pageSize:15
  }

  componentWillReceiveProps (newProps) {
    if(newProps.currentPage!==1  && newProps.currentPage===this.props.currentPage){
      this.props.handleResetPagination();
    }
  }

  customFilter=()=>{
  

        let test=this.props.adsList;
      
        if(this.props.filterItems.selectedCategoryId!==0){
          
          test=test.filter( (item)=> item.categoryId===this.props.filterItems.selectedCategoryId );
        }
      
        if(this.props.filterItems.selectedTagId!==0){
          test=test.filter( (item)=> item.tagId===this.props.filterItems.selectedTagId );
        }
      
        if(this.props.filterItems.searchKey!==""){
          test=test.filter( (item)=> (item.title.toLowerCase().includes(this.props.filterItems.searchKey.toLowerCase()) || item.location.toLowerCase().includes(this.props.filterItems.searchKey.toLowerCase()) ) );
        }
      
        if(this.props.filterItems.minPrice!==0 && this.props.filterItems.maxPrice!==0){
          test=test.filter( (item)=> item.price<=this.props.filterItems.maxPrice && item.price>=this.props.filterItems.minPrice );
        }
      
        if(this.props.filterItems.hasPicture===true){
          test=test.filter( (item)=> item.hasPicture===true );
        }
      
        if(this.props.filterItems.hasChat===true){
          test=test.filter( (item)=> item.chatActive===true );
        }

        if(this.props.filterItems.selectedCity!==""){
          test=test.filter( (item)=>item.location===this.props.filterItems.selectedCity)
        }
        
        return test;
      
      }
      
  
    handleNextPrevClick=(str)=>{
      if(str=="NEXT"){
          this.props.handleChangePagination( this.props.currentPage+1 );
      }else if(str=="PREV"){
        this.props.handleChangePagination( this.props.currentPage-1 );
      }
    }

    render() { 
      let start= (this.props.currentPage-1)*(this.state.pageSize);
      let end= (this.state.pageSize)*(this.props.currentPage);


        return ( 
            <React.Fragment>
                <div className="ads-border">
                        <span>Säljes i hela Sverige</span>
                        <div className="row">

                            { this.customFilter().slice(start,end).map((ads,index)=> <div key={index} className="col-4"><AdsItem data={ads}></AdsItem></div> )}

                        </div>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">

                                { this.props.currentPage!==1 && <li className="page-item" onClick={()=>this.handleNextPrevClick("PREV")}><a className="page-link">Previous</a></li> }

                                { [...Array(Math.ceil(this.customFilter().length/this.state.pageSize)).keys()].map((num,index)=> <li key={index} onClick={()=>this.props.handleChangePagination(num+1)} className={(this.props.currentPage==(num+1))? "page-item active":"page-item"}><a className="page-link">{num+1}</a></li>)}

                                {this.props.currentPage!==Math.ceil(this.customFilter().length/this.state.pageSize) &&  <li className="page-item" onClick={()=>this.handleNextPrevClick("NEXT")}><a className="page-link">Next</a></li> }
                               
                            </ul>
                        </nav>
                         
                </div>
            </React.Fragment>
         );
    }
}

const mapStateToProps=(state)=>({
    adsList: state.AdsReducer.adsItems,
    filterItems:{
        selectedCategoryId: state.CategoriesReducer.selectedCategory,
        searchKey: state.SearchBoxReducer.searchKey,
        minPrice: state.PriceReducer.price.minPrice,
        maxPrice: state.PriceReducer.price.maxPrice,
        hasPicture: state.SwitchInputReducer.hasPicture,
        hasChat: state.SwitchInputReducer.hasChat,
        selectedTagId: state.TagsReducer.selectedTag,
        selectedCity: state.LocationReducer.selectedCity
      },
      currentPage: state.AdsReducer.currentPage,
});

const mapsDispatchToProps={
  handleResetPagination: resetPagination,
  handleChangePagination: changePagination
}


 
export default connect (mapStateToProps,mapsDispatchToProps) (AdsContainer);
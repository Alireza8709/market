import { faAngleDown, faAngleRight, faArrowDown, faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./Location.css";
import getCities from '../../services/swedenCities';
import { changeCity } from '../../store/ActionCreators';
import { connect } from 'react-redux';


class Location extends Component {
    state = { 
        isOpen:false,
        listCities:getCities(),
        listItems:[],
        level:1,
        selectedProvince:""
     };

     handleLocationClick=()=>{
        let test= [...new Set(this.state.listCities.map((city)=> city.subcountry))];
        
        this.setState({isOpen:true,listItems:test});
     }

     handleCloseModal=()=>{
         this.setState({isOpen:false});
     }

     handleItemClick=(item)=>{

        if(this.state.level===1){
            let test= this.state.listCities.filter( (t)=> t.subcountry===item ).map((city)=>city.name);
            this.setState({ listItems:test, level:2, selectedProvince: item });
        }else{
            this.props.handleChangeCity(item);

            this.setState({isOpen: false});
        }

        
     }

     handleSearchChange=(event)=>{
         let test;
         if(this.state.level==1){
             let province=[...new Set(this.state.listCities.map((city)=> city.subcountry))];
             test=province.filter( (item)=> item.toLowerCase().startsWith(event.target.value.toLowerCase()) ) ;
         }else{

             test=this.state.listCities.filter( (item)=>
            item.subcountry===this.state.selectedProvince && item.name.toLowerCase().startsWith(event.target.value.toLowerCase()) ).map((city)=>city.name);
         }
                
        this.setState({ listItems:test });
    };

    handleBackClick=()=>{
        let test= [...
            new Set(this.state.listCities.map((city)=> city.subcountry)),
        ];
        this.setState({ level:1, listItems:test });
    }


    render() { 
        return ( 
            <React.Fragment>
            <button onClick={this.handleLocationClick} className="btn btn-light btn-location">{this.props.selectedCity==="" ?"Hela Sverige": this.props.selectedCity } <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></button>
            {this.state.isOpen===true && <div className="modal fade show" style={{display:"block"}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header header-location">
                    <h5 className="modal-title" id="exampleModalLabel"> {this.state.level==1 ? "Hela Sverige" : "Välj stad" } </h5>
                    <button onClick={this.handleCloseModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="position-relative mt-3">
                        <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                        <input onChange={this.handleSearchChange} type="text" className="form-control search-input" placeholder={ this.state.level==1 ? "Hela Sverige" : this.state.selectedProvince }></input>
                        {this.state.level==2 && <button onClick={this.handleBackClick} className="btn btn-link btn-back"><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Gå tillbaka till hela Sverige</button> }
                    </div>
                </div>
                <div className="modal-body location-body">
                   
                    <ul className="location-list">
                        { this.state.listItems.sort((a,b)=> (a>b) ? 1:-1).map( (item,index)=><li onClick={()=>this.handleItemClick(item)} key={index}>{item} {this.state.level==1 && <FontAwesomeIcon className="location-item-icon" icon={faAngleRight}></FontAwesomeIcon> } </li>  )}
                    </ul>
                </div>
                
                </div>
            </div>
        </div> }
        
        </React.Fragment>
         );
    }
}

const mapStateToProps=(state)=>({
    selectedCity: state.LocationReducer.selectedCity
});

const mapDispatchToProps={
    handleChangeCity: changeCity
}

export default connect(mapStateToProps, mapDispatchToProps) (Location);





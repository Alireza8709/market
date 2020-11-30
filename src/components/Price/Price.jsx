import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./Price.css";


class Price extends Component {
    state = { 
        price:{
        minPrice:100,
        maxPrice:5000
        },
        isOpen:false

     }
    
    handleChangePrice=(event)=>{

        let test=this.state.price;

        test[event.target.name]=parseInt(event.target.value);

        this.setState({price:test});

        this.props.onChangePrice(test);

    }

    handleOpenClick=()=>{
        let test=this.state.isOpen;
        this.setState({isOpen:!test});
    }

    render() { 
        return ( 
            <>
            <div className="price-border">
                <h4 onClick={this.handleOpenClick} className="price-title">Price <FontAwesomeIcon icon={(this.state.isOpen===true)? faAngleUp : faAngleDown}></FontAwesomeIcon></h4>
               { this.state.isOpen && <div>
                <div className="price-input">
                    <span>Min Pris: </span>
                    <select name="minPrice" onChange={this.handleChangePrice} placeholder="tex 100 SEK">
                        <option selected value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                        <option value="2000">2000</option>
                        <option value="5000">5000</option>
                         
                    </select>
                </div>
                <div className="price-input">
                    <span>Max Pris: </span>
                    <select name="maxPrice" onChange={this.handleChangePrice} placeholder="tex 5000 SEK">
                        <option selected value="5000">5000</option>
                        <option value="7000">7000</option>
                        <option value="10000">10000</option>
                        <option value="15000">15000</option>
                        <option value="20000">20000</option>
                         
                    </select>
                </div>
                </div>}
            </div>
            </>
         );
    }
}
 
export default Price;
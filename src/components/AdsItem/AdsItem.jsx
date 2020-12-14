import { faChartBar, faComments } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import "./AdsItem.css";

class AdsItem extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="ads-item">
                <div>
                        <strong>{this.props.data.title}</strong>
                        <small className="price">{this.props.data.price}</small>
                        <small className="location">{this.props.data.location}</small>
                       {this.props.data.chatActive===true && <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> }
                    </div>

                 <img src={ (this.props.data.hasPicture===true) ? this.props.data.imageUrl : "/images/no-image.png" }></img>
                    
                   
                </div>
            </React.Fragment>
         );
    }
}
 
export default AdsItem;
import React, { Component } from 'react';
import AdsItem from '../AdsItem/AdsItem';
import "./AdsContainer.css";


class AdsContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="ads-border">
                        <span>Säljes i hela Sverige</span>
                        <div className="row">

                            {this.props.adsList.map((ads,index)=> <div key={index} className="col-4"><AdsItem data={ads}></AdsItem></div> )}

                        </div>
                         
                </div>
            </React.Fragment>
         );
    }
}
 
export default AdsContainer;
import React, { Component } from 'react';
import Categories from '../Categories/Categories';
import Price from '../Price/Price';
import SwitchInput from '../SwitchInput/SwitchInput';

class Sidebar extends Component {
    state = {  };
    render() { 
        return ( 
            <React.Fragment>
            <Categories onChangeCategory={(categoryId)=>this.props.onChangeKategorier(categoryId)} data={this.props.categoriesList}></Categories>
            <Price onChangePrice={(price)=>this.props.onChangePriceSidebar(price)}></Price>
            <SwitchInput onChangeSwitch={(position)=>this.props.onPicturesSwitchChange(position)} text={"Bara Bilder"}></SwitchInput>
            <SwitchInput onChangeSwitch={(position)=>this.props.onChattableSwitchChange(position)} text={"Kommentar"}></SwitchInput>
            </React.Fragment>
         );
    }
}
 
export default Sidebar;
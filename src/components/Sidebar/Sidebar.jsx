import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from '../Categories/Categories';
import Price from '../Price/Price';
import SwitchInput from '../SwitchInput/SwitchInput';
import { SwitchInputReducer } from '../../store/reducers/SwitchInputReducer';
import { changePictureState, changeChatState } from '../../store/ActionCreators';

class Sidebar extends Component {
    state = {  };
    render() { 
        return ( 
            <React.Fragment>
            <Categories></Categories>
            <Price></Price>
            <SwitchInput onChangeSwitch={(position)=>this.props.onPicturesSwitchChange(position)} isActive={this.props.hasPicture} text={"Bara Bilder"}></SwitchInput>
            <SwitchInput onChangeSwitch={(position)=>this.props.onChattableSwitchChange(position)} isActive={this.props.hasChat} text={"Kommentar"}></SwitchInput>
            </React.Fragment>
         );
    }
}

const mapStateToProps=(state)=>({
    hasPicture: state.SwitchInputReducer.hasPicture,
    hasChat: state.SwitchInputReducer.hasChat
});

const mapDispatchToProps={
    onPicturesSwitchChange: changePictureState,
    onChattableSwitchChange : changeChatState
}

 
export default connect(mapStateToProps,mapDispatchToProps) (Sidebar);
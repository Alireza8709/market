import React, { Component } from 'react';
import "./SwitchInput.css";

class SwitchInput extends Component {
    state = { 
        active:false
     }

    handleChangeSwitch=()=>{
        this.props.onChangeSwitch( !this.state.active );
        this.setState({active: !this.state.active});
    }

    render() { 
        return ( 
        <React.Fragment>
            <div className="switch-border">
            <span>{this.props.text}</span>
                <label  className="switch">
                    <input onClick={this.handleChangeSwitch} type="checkbox"></input>
                    <span className="slider round"></span>
                </label>
            </div>
        </React.Fragment> 
        );
    }
}
 
export default SwitchInput;
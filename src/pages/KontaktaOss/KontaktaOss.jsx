import Axios from 'axios';
import React, { Component } from 'react';

class KontaktaOss extends Component {
    state = { 
        photos:[]
     }

    componentDidMount(){
        this.recieveDataFromServer();
    }

    recieveDataFromServer=async()=>{
        await Axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
            if(res.status==200){
                this.setState({photos:res.data});
            }
        });
    }

    recieveDataFrom

    render() { 
        return (
          
            <React.Fragment>
             <h2>Kontakta oss</h2>
             <hr/>
             <h5>Fake info from JsonPlaceholder using axios</h5>
             <br/>
             <div className="row">
                  {this.state.photos.map((p,index)=> index<100 && <div key={index} className="col-12 col-md-3"><img className="w-100" src={p.url}></img></div>)}
             </div>
             </React.Fragment>
              );
    }
}
 
export default KontaktaOss;
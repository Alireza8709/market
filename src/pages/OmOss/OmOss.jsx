import Axios from 'axios';
import React, { Component } from 'react';


class OmOss extends Component {
    state = { 
        posts:[]
     }

     componentDidMount(){
        this.receiveDataFromServer();
     }

     receiveDataFromServer=async()=>{
        await Axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            if(response.status==200){
                this.setState({posts:response.data});
            }
        });
     }

    render() { 
        
        return ( 
         <React.Fragment>
        <h2>Om oss</h2> 
        <hr/>
        <h5>Fake info from JsonPlaceholder using axios</h5>
        <br/>
        <div className="row">
        {this.state.posts.map((q)=><div className="col-12  col-md-4"> <h3>{q.title}</h3> <p> {q.body} </p></div>)}
        </div>
        </React.Fragment>
            );
        }
}
 
export default OmOss;
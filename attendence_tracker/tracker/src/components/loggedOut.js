import React from 'react';
import {Redirect} from "react-router-dom";
import Cookies from "universal-cookie";



class LoggedOut extends React.Component {

    constructor(props){
      super(props);

      
        
      
      
      this.logout=this.logout.bind(this);
    }

    state = {
        navigate: false
    };


    logout = () =>{
        localStorage.clear("token");
        this.setState({navigate: true});
    };
    

    render(){
        const {navigate} = this.state;
        

        if (navigate){
            return <Redirect to= '/' push = {true}/>
        }
        return(

            <div class = "flex-container">
            <h2 class= "item-1">Successfully Logged Out</h2>
            <p class = "item-2">Your Log Out Date is {new Date(this.props.location.state.userCredentials.timestamp).toString("dd MMM yyyy HH:mm:ss")}</p>
            
            
            {<div class = "container-2">
            <a onClick = {this.logout}><ion-icon name="log-in" class = "item-3"></ion-icon>Sign In</a>
            </div>}
          
            </div>
                
        )
    }
}

export default LoggedOut;
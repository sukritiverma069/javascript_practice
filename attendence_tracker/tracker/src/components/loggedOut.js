import React from 'react';
import {Redirect} from "react-router-dom"



class LoggedOut extends React.Component {

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
            return <Redirect to= 'Login' push = {true}/>
        }
        return(
                <button onClick = {this.logout}>LogOut</button>
        )
    }
}

export default LoggedOut;
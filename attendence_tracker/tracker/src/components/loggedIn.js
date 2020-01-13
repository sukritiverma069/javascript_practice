import React from 'react';
import './loggedIn.css';
import LoggedOut from './loggedOut';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie'



class LoggedIn extends React.Component {

    constructor(props){
        super(props);
        console.log('getting login time ' + this.props.location.state.userCredentials.timestamp)
        console.log('user credential inside loggedIn '+ JSON.stringify(this.props.location.state.userCredentials))
        this.state = {
            redirect: false,
            userCredentialsloggedin: this.props.location.state.userCredentials            
          };
        
        
        this.authStatus = this.authStatus.bind(this);
    }

    
    authStatus(){

       
        this.setState({
            redirect: true
        })
       
       

        var userLoginDetails = this.props.location.state.userCredentials;
        userLoginDetails.action = "LOGOUT"
        userLoginDetails.timestamp = parseFloat(Date.now())
        console.log("all the json data")
        console.log(JSON.stringify(userLoginDetails))

        const cookieObj = new Cookies();
        cookieObj.remove("cookie_user")
      
        
        fetch("http://localhost/project-details-backend/responseData.json",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userLoginDetails)
            
            
          }).then(response => response.json())
          .then( p => {
              
            // const cookieObj = new Cookies();
            // cookieObj.remove("cookie_user")
      
            
             this.setState({
                 userAuthenticated: p.authentication_status,
                 redirect: p.authentication_status,
                 loginClicked: true
               })
             
            }).catch(error => {
                console.log(error);
            });


    }
    
    
    render(){
            
            if(this.state.redirect){
                return (<Redirect
                    to={{
                      pathname: "/LoggedOut",
                      state: { userCredentials: this.state.userCredentialsloggedin}
                    }}
                  />)}
                else{

                
        return(
            
                <div class = "flex-container">
                 <h1>Welcome {this.props.location.state.userCredentials.username}</h1>   
                <h2 class= "item-1">Successfully Logged In</h2>
                
                <p class = "item-2">Your Log In Date is {new Date(this.props.location.state.userCredentials.timestamp).toString("dd MMM yyyy HH:mm:ss")}</p>
                
                
                {<div class = "container-2">
                    <a onClick={this.authStatus}><ion-icon name="power" class = "item-3"></ion-icon>Log Out</a>
                </div>}
              
                </div>
             )}
        }
    }

export default LoggedIn;
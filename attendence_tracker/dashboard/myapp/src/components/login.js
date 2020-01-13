import React, { Component } from 'react';
import './login.css';
import {Redirect} from 'react-router-dom'
import Dashboard from './dashboard';



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
           userCredentials: {username:'', password: ''},
           loginClicked: false,
           userAuthenticated: false,
           redirect: false,
           
        }
       this.getAuthenticationStatus=this.getAuthenticationStatus.bind(this)
       this.handleInputChange=this.handleInputChange.bind(this) 
    }

    handleInputChange(event){
   
        let changedKey = event.target.name;
        let changedValue = event.target.value;
        console.log("the changed key is = " + changedKey)
        console.log("the changed value is = " + changedValue)
                        
         this.setState(prevState => ({
          userCredentials: { 
                            // object that we want to update
              ...prevState.userCredentials,    // keep all other key-value pairs
              [changedKey]: changedValue,    // update the value of specific key
              
          }
      }))
      
      
      
      }


      //http://localhost/attendence_tracker_backend/api/project/login.php
      //http://localhost/project-details-backend/responseData.json

      getAuthenticationStatus(event){ 
      event.preventDefault();
       

       if(this.state.userCredentials){
        console.log("sending body")
        var userLoginDetails  = this.state.userCredentials
        console.log("this.state.userCredentials")
        console.log(this.state.userCredentials)
        console.log(JSON.stringify(userLoginDetails))    
            
        fetch("http://localhost/project-details-backend/responseData.json",{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userLoginDetails)
            
            
          }).then(response => response.json())
          .then( p => {
            console.log(p);
             console.log(p.authentication_status)
             this.setState({
                 userAuthenticated: p.authentication_status,
                 redirect: p.authentication_status,
                 loginClicked: true
               })
             
            }).catch(error => {
              console.log(error);
          });
        } else{
            alert("Please enter some values")
        }
       }
         
        

        

        


render(){

    if(this.state.userAuthenticated){
        //component = {<LoggedIn auth = {this.state.userAuthenticated}/>}
        return (<Redirect
            to={{
              pathname: "/Dashboard",
              state: { userCredentials: this.state.userCredentials}
            }}
          />)

    }else{
        if(this.state.loginClicked && !this.state.userAuthenticated){
            alert("Invalid Credentials")
            this.state.loginClicked= false
        }
    }
    return(
        <div>

            <div className = "heading ">
                Attendence Tracker Dashboard
            </div>
            <div className = "form">
                <form>
                <div className = "header">
                        <p>Sign In</p>
                </div>

                <div className = "row">
                    <input type = "text" name = "username" id = "username" placeholder = "Username" value = {this.state.userCredentials["username"]} onChange = {this.handleInputChange}></input>
                </div>

                <div className = "row">
                    <input type = "password" name = "password" id = "password" placeholder = "Password" value = {this.state.userCredentials["password"]} onChange = {this.handleInputChange}></input>
                </div>

                <div className = "row">
                <div>
                        <button className ="btn" onClick = {this.getAuthenticationStatus} >Login</button>
                </div>
                </div>
                  
                 

                 </form>
            </div>
        </div>
        
        
       
    )
}
}

export {Login} 
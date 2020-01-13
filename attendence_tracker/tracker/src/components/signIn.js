import React, { Component } from 'react';
import './signIn.css';
import {Redirect} from 'react-router-dom'
import LoggedIn from './loggedIn';
import Cookies from 'universal-cookie'



class Login extends Component {

    constructor(props){
        super(props);
        const cookieObj = new Cookies();
    
        const user_cookie = cookieObj.get('cookie_user')
        
        console.log('cookie in login constructor ' + JSON.stringify(user_cookie))

        if(typeof user_cookie === 'undefined'){
            this.state = {
                userCredentials: {username:'', password: '', timestamp: ''},
                loginClicked: false,
                userAuthenticated: false
             }
        }else {
            this.state = {
                userCredentials: {username:user_cookie.username, password: user_cookie.password, timestamp: user_cookie.timestamp},
                loginClicked: false,
                userAuthenticated: true,
             }

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
        userLoginDetails.timestamp = parseFloat(Date.now())
        userLoginDetails.action = "LOGIN"
       
        console.log("this.state.userCredentials")
        console.log(this.state.userCredentials)
        console.log(JSON.stringify(userLoginDetails))    
            
        fetch("http://localhost/attendence_tracker_backend/api/project/login.php",{
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
                 loginClicked: true,
                 loginTime:p.logintime
               })
               const cookies = new Cookies();
               console.log('going to set cookie = ' + this.state.userCredentials )
               var exp = new Date();
               //exp.setHours(exp.getHours()+10)
               exp.setSeconds(exp.getSeconds()+20)
             cookies.set('cookie_user' , this.state.userCredentials, { path: '/',expires: exp });
             
            }).catch(error => {
              console.log(error);
          });
        } else{
            alert("Please enter some values")
        }
       }
         
        

        

        


render(){

    const cookies = new Cookies();
    if(this.state.userAuthenticated){
        return (<Redirect
            to={{
              pathname: "/LoggedIn",
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
                Attendence Tracker
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
                        <a className ="btn" onClick = {this.getAuthenticationStatus} >Login</a>
                </div>
                </div>
                  
                 

                 </form>
            </div>
        </div>
        
        
       
    )
}
}

export {Login} 
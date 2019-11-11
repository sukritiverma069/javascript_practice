import React, { Component } from 'react';
import './signIn.css';
import {Redirect} from 'react-router-dom'



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
           userCredentials: {username:'', password: ''},
           loginClicked: false,
           userAuthenticated: false,
           redirect: false
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

      getAuthenticationStatus(event){ 
      event.preventDefault();
       this.setState({
           loginClicked: true
       })

       if(this.state.userCredentials){
        fetch("http://localhost/project-details-backend/responseData.json",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.userCredentials),
            
          }).then(response => response.json())
          .then( p => {
            
            console.log(p);
             
             const status = p.authentication_status? this.state.redirect===true: this.state.redirect===false;
             console.log(p.authentication_status)
             this.setState({
                 userAuthenticated: p.authentication_status,
                 redirect: true
               })
             return p
            }).catch(error => {
              console.log(error);
          });
        } else{
            alert("Please enter some values")
        }
       }
         
        

        

        


render(){

    if(this.state.redirect){
        return (<Redirect to= {'/loggedin'}/>)

    }else{

    }
    return(
        <div>
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
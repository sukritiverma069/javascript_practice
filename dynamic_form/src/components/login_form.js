import React, { Component } from 'react';
import './stylesLogin.css';



class LoginForm extends Component {

    constructor(props){
        super(props);

        this.state = {
           userCredentials: {},
           loginClicked: false,
           userAuthenticated: false,
           error: false
        }
      
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



render(){
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
                        <button className ="btn" onClick = {this.props.callbackfromLogin(this.state.userCredentials)} >Login</button>
                </div>
                </div>
                  
                 

                 </form>
            </div>
        </div>
        
        
       
    )
}
}

export {LoginForm} 
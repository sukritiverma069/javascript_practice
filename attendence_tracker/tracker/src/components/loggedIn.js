import React from 'react';
import './loggedIn.css';
import LoggedOut from './loggedOut';


class LoggedIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            date: "",
            time: ""
          };
        
        this.dateTime = this.dateTime.bind(this);
    }

    componentDidMount(){
        this.dateTime()
    }

    dateTime(){
        var date = new Date().toDateString();
        var time = new Date().toLocaleTimeString();
          this.setState({ date, time });
    }
    
    
    render(){
            const { date,time } = this.state;
        return(
            
                <div class = "flex-container">
                <h2 class= "item-1">Successfully Logged In</h2>
                <p class = "item-2">Your Log In Date is {date}</p>
                <p class = "item-2">Your Log In Time is {time}</p>
                
                {<div class = "container-2">
                    <a href= "#" ><ion-icon name="power" class = "item-3"></ion-icon>Log Out</a>
                </div>}
              
                </div>
             )}
        }

export default LoggedIn;
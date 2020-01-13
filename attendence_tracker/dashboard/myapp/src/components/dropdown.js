import React, { Component } from 'react';
import './dropdown.css'




class Dropdown extends Component {

constructor(props){
    super(props);

    this.state={
        
        redirect: false,
        selectClicked: true
    }
}


getAgentDetails(){
    // fetch("http://localhost/project-details-backend/responseData.json",{
    //         method: 'post',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify()
            
            
    //       }).then(response => response.json)
    //       .then(actualResponse => {
    //             console.log(actualResponse)
    //             console.log(actualResponse.username)
    //             this.setState({
    //                 username: actualResponse.username,
    //                 redirect: true
    //             })
    //       })
}

render(){
    return(
        <div >
            <div>
            <select name = "options" class ="agents-select">
                    <option>SELECT</option>
                    <option value={this.getAgentDetails}>{this.state.username}</option>
                </select>
            </div>
                

                {(this.state.selectClicked)? 
                <div class = "flex-container">
                
                <div className = "item-2">Latecomings this month  </div>
                <div className = "item-2">Early goings this month</div>
                <div className = "item-2">Days wherein the hours have been completed</div>
                <div className = "item-2">Login Time Today</div>
                <div className = "item-2">Logout Time today</div>
               </div>: null}
                  

              </div>
              

              
    )
}



}

export default Dropdown;
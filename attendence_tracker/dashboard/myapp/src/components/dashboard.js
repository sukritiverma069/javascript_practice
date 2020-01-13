import React, { Component } from 'react';
import Dropdown from './dropdown'


class Dashboard extends Component {
    constructor(props){
        super(props);
    }






    render(){
     return(
         <div class = "flex-container">
             <div class = "item-1"><Dropdown/></div>
             <div class = "item-2"></div>
             <div class = "items-3"></div>
         </div>
     )
    }
}

export default Dashboard;


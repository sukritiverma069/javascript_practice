
import React, { Component } from 'react';
import Popup from './popup';

class Edit extends Component {

    constructor(props){
    super(props);
    console.log('inside edit component constructor')
    console.log(props.rowData);
    this.state = { showPopup: false,
      currentRow : props.rowData
     };

     this.togglePopup = this.togglePopup.bind(this);
    }
  //event handler for on click event of edit button
    togglePopup() {
     this.setState({
       showPopup: !this.state.showPopup
     });
   }
  
    render() {
      return (
        <div>
         {/* <h1> Simple Popup Example In React Application </h1> */}
         <button onClick={this.togglePopup}> Edit</button>
  
         {this.state.showPopup ?
           <Popup
            text='Click "Close Button" to hide popup'
            closePopup={this.togglePopup}
            currentRow = {this.state.currentRow}
    

           />
           : null
         }
        </div>
  
      );
    }
  }

  export  {Edit};
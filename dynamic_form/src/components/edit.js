
import React, { Component } from 'react';
import Popup from './popup';

class Edit extends Component {

    constructor(props){
    super(props);
    
    this.state = { showPopup: false,
      
     };

     this.togglePopup = this.togglePopup.bind(this);
     this.editCallback = this.editCallback.bind(this);
     

    }

    editCallback(datafromPopup){
      console.log('inside edit callback')
      console.log(datafromPopup)
      this.props.callbackFromTable(datafromPopup)
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
            currentRow = {this.props.rowData}
            
            callbackFromEdit ={this.editCallback}
           />
           : null
         }
        </div>
  
      );
    }
  }

  export  {Edit};
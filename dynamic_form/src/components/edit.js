
import React, { Component } from 'react';
import Popup from './popup';

class Edit extends Component {

    constructor(props){
    super(props);
    this.state = { showPopup: false,
        updateType : "UPDATE"  
     };

     this.togglePopup = this.togglePopup.bind(this);
     this.editCallback = this.editCallback.bind(this);
     this.deleteID = this.deleteID.bind(this)
     

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

   deleteID() {
     let temp2 = {};

     let allKeys = Object.keys(this.props.rowData)
        for(let i=0; i<allKeys.length; i++){
          if(allKeys[i] != "ID"){
            temp2[allKeys[i]] = this.props.rowData[allKeys[i]];
   }
  }
  return temp2;
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
            currentRow = {this.deleteID()}
            updateType = {this.state.updateType}
            callbackFromEdit ={this.editCallback}
            
           />
           : null
         }
        </div>
  
      );
    }
  }

  export  {Edit};
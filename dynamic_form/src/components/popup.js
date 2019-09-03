import React from 'react';
import './styles1.css';


//import { ReactComponent } from '*.svg';

class Popup extends React.Component {
 constructor(props){
   super(props);
   
this.popupCallback=this.popupCallback.bind(this)
  }
   
   popupCallback(dataFromProject){
     console.log("inside popup callback")
     console.log(dataFromProject)
     this.props.callbackFromEdit(dataFromProject)
   }

   
 

 
render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1>{this.props.text}</h1> */}
          <Project currentRow = {this.props.currentRow}  closePopup={this.props.closePopup} callbackFromPopup = {this.popupCallback}/>
          
        </div>
      </div>
    );
  }
}



class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projectValues : this.props.currentRow
      
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.somefunction = this.somefunction.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event){
   
    let changedKey = event.target.name;
    let changedValue = event.target.value;

     //let changedState =this.state.projectValues;  // creating copy of state variable
     //changedState[changedKey] =changedValue;                     
     this.setState(prevState => ({
      projectValues: {                   // object that we want to update
          ...prevState.projectValues,    // keep all other key-value pairs
          [changedKey]: changedValue       // update the value of specific key
          
      }
      
  }))
  
  
  }

  somefunction(event){
    this.props.callbackFromPopup(this.state.projectValues)
    this.handleSubmit()
    this.props.closePopup()
  }


  

  handleReset(event){
    let original = this.props.currentRow
    this.setState({projectValues: original})
    
  }

  

  handleSubmit(event){
    
    fetch('http://localhost/project-details-backend/api/project/update.php',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.projectValues)
    })
    .then(function(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
  }).then(function(response) {
      //alert("the project was successfully updated")
  }).catch(function(error) {
      alert("Sorry, there was some error with the input, try again")

  });
}
  

  

render() {

  
    
    return(
      <div className = "list-container">

        <ul className = "list_item">
          {
            Object.keys(this.props.currentRow).map( (k) => {
              return <li key = {k}> {k}  : <input type ="text" name={k} value ={this.state.projectValues[k]} onChange = {this.handleInputChange} ></input> </li>
            } )
          }
          
        
        
          
        </ul>
        

        <div className = "row">
          {/* <div className = "column">
          <a href="#" onClick={this.handleSubmit} >Submit</a>
          </div> */}
          <div className = "column">
          <a href="#" onClick={this.handleReset} >Reset</a>
          </div>
          <div className = "column" >
          <a href="#" onClick={this.somefunction} >Update</a>
          </div>
          <div className = "column" >
          <a href="#" onClick={this.props.closePopup} >Close</a>
          </div>
          
        
         </div>
        
        

      </div>

    );
  }
}


export default Popup;
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
     //props name 'callbackFromEdit' has to be made moe generic
     this.props.callbackFromEdit(dataFromProject)//function call
   }

   
 

 
render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1>{this.props.text}</h1> */}
          <Project currentRow = {this.props.currentRow}  closePopup={this.props.closePopup} callbackFromPopup = {this.popupCallback} updateType = {this.props.updateType}/>
          
        </div>
      </div>
    );
  }
}





class Project extends React.Component {
  constructor(props){
    super(props);
    

    console.log("inside project constructor")
     
     
    
    this.state = {
      projectValues : this.props.currentRow,
      dataValidator : this.initializeValidator,
      updateCalled: false
    }

    

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleupdate = this.handleupdate.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.submit = this.submit.bind(this)
    this.validate = this.validate.bind(this)
    this.isValueValidNumber = this.isValueValidNumber.bind(this)
    //this.isValueValidString = this.isValueValidString.bind(this)
    this.completeDataValid = this.completeDataValid.bind(this)
    
  }

  initializeValidator(){
    let temp = {}
    let allKeys = Object.keys(this.props.currentRow)

    for(let i=0;i<allKeys.length;i++){
     temp[allKeys[i]+"_valid"]=true;
    }

    return temp;
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

  handleupdate(event){
    console.log("inside handle updated")
    this.submit()
    // this.props.callbackFromPopup(this.state.projectValues)
    // this.props.closePopup()
  }

  handleReset(event){
    let original = this.props.currentRow
    this.setState({projectValues: original})
    this.setState({dataValidator: this.initializeValidator})
    this.setState({updateCalled:false})

    
  }

  markFieldInvalid(fieldName){
    this.setState(prevState => ({
      dataValidator: {                   // object that we want to update
    
        ...prevState.dataValidator,    // keep all other key-value pairs
          [fieldName+"_valid"]: false       // update the value of specific key
      }
      
  }))
  }

  markFieldValid(fieldName){
    this.setState(prevState => ({
      dataValidator: {                   // object that we want to update
          ...prevState.dataValidator,    // keep all other key-value pairs
          [fieldName+"_valid"]: true       // update the value of specific key
      }
      
  }))
  }



  validate(event){
    console.log("inside validate")
    let key = event.target.name
    let value = event.target.value
    
    var alphanumeric_regex = /^[a-z0-9 ]+$/i

    if(!alphanumeric_regex.test(value)){
     this.markFieldInvalid(key)

    }else {
      if(key.toLowerCase().endsWith("id")){
        var isValidNumber = this.isValueValidNumber(value);
      if(!isValidNumber){
          console.log("inside markfieldInvalid")
          this.markFieldInvalid(key)
      } else {
           this.markFieldValid(key)  
      }
              
    }else{
      this.markFieldValid(key)
    }
    
  } 
  
}

  // isValueValidString(event){
   
  // }

  isValueValidNumber(value){
    return !isNaN(value);
      
      
  }
   completeDataValid(){
    console.log("inside complete data valid")
     var returnValue = true
    var arr = Object.keys(this.state.dataValidator)
     for(var i = 0; i<= arr.length-1; i++){
       if(this.state.dataValidator[arr[i]] == false)  {
        returnValue = false
          
        }
     }
     
     return returnValue;
     
   }

   
  
  

  submit(event){

    
    this.setState({updateCalled:true})
    let updateUrl = 'http://localhost/project-details-backend/api/project/update.php';
    let createUrl = 'http://localhost/project-details-backend/api/project/create.php';
    let url = this.props.updateType=="CREATE"? createUrl:updateUrl 
    
    
   
   if(this.completeDataValid()){
    console.log("going to send data")
    console.log(JSON.stringify(this.state.projectValues))
    fetch(url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state.projectValues)
    })
    .then(function(response) {
      if (!response.ok) {
          throw Error(response.statusText);
      }
      return response;
  }).then(function(response) {
      alert("the project was successfully updated")
      
    
  }).catch(function(error) {
      alert("Sorry, there was some error with the input, try again")
      console.log(error)

  });

   }
  
}
  

render() {

  


    return(
      
      <div className = "list-container">
      
        <ul className = "list_item">
          {
            
            Object.keys(this.props.currentRow).map( (k) => {
              
              return <li key = {k}> {k}  : <input id = {k} type ="text" name={k}  onBlur = {this.validate} value ={this.state.projectValues[k]} onChange = {this.handleInputChange}></input> 
              {this.state.dataValidator[k+"_valid"] == false ? <span class = "err" id ={k+"_error"} >Error</span> : null}
              
                
              </li>

              
              
              
            } )
            
          }

          {this.completeDataValid() == true || !this.state.updateCalled ? null: <span class = "error" >Sorry there was some error, Try Again</span>}
          
 
        </ul>
        
        

        <div className = "row">
          {/* <div className = "column">
          <a href="#" onClick={this.submit} >Submit</a>
          </div> */}
          <div className = "column">
          <a href="#" onClick={this.handleReset} >Reset</a>
          </div>
          <div className = "column" >
          <a href="#" onClick={this.handleupdate} >Update</a>
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
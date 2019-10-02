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
    var arrKeys = Object.keys(this.props.currentRow)
  
    return (
      <div className = {arrKeys.length<=8? 'popup': 'popup_2'}>
        
        <div className = {arrKeys.length<=8? 'popup_inner': 'popup_inner_2'}>
          {/* <h1>{this.props.text}</h1> */}
          <Project currentRow = {this.props.currentRow}  closePopup={this.props.closePopup} callbackFromPopup = {this.popupCallback} updateType = {this.props.updateType} />
          
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
      updateCalled: false,
      arrKeys: Object.keys(this.props.currentRow)
    }

    

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleupdate = this.handleupdate.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.submit = this.submit.bind(this)
    this.validate = this.validate.bind(this)
    this.isValueValidNumber = this.isValueValidNumber.bind(this)
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


  isValueValidNumber(value){
    return !isNaN(value);
      
      
  }
   completeDataValid(){
    console.log("inside complete data valid")
     var returnValue = true
    var arr = Object.keys(this.state.dataValidator)
     for(var i = 0; i<= arr.length-1; i++){
       if(this.state.dataValidator[arr[i]] == false)  {
        returnValue = false;
        break;
          
        }
     }
     
     return returnValue;
     
   }

   isDataEmpty(){
     var returnValue = true;
     
     var allKeys = Object.keys(this.state.projectValues)
     for(var i=0; i<allKeys.length; i++){
       
      if(this.state.projectValues[allKeys[i]] != ""){  
        
        returnValue = false
        break
      }
     }
   
       return returnValue

   }

   
  submit(event){

    
    this.setState({updateCalled:true})
    let updateUrl = 'http://localhost/project-details-backend/api/project/update_2.php?table=project_details';
    let createUrl = 'http://localhost/project-details-backend/api/project/create_2.php?table=project_details';
    let url = this.props.updateType=="CREATE"? createUrl:updateUrl 
    
    
   
   if(this.completeDataValid() && !this.isDataEmpty()){
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

   var arrKeys= Object.keys(this.props.currentRow)
  
  return(
      
      <div className = {arrKeys.length<=8? 'list-container': 'list-container_2'}>
      {console.log("the number of keys is" + arrKeys.length)}
        <ul className = {arrKeys.length<=8? 'list_item': 'list_item_2'}>
          { 
            
            arrKeys.map( (k) => {
              
              return <li key = {k}> {k}  : <input id = {k} type ="text" name={k}  onBlur = {this.validate} value ={this.state.projectValues[k]} onChange = {this.handleInputChange}></input> 
              {this.state.dataValidator[k+"_valid"] == false ? <span class = "err" id ={k+"_error"} >Error</span> : null}
              
                
              </li>

              
              
              
            } )
            
          }
          
          {/* {this.completeDataValid() == false && this.state.updateCalled ? <div class = "error" >Some fields are invalid, Try Again</div> : null} */}
          {this.isDataEmpty() == true && this.state.updateCalled ? <div class = "err">Please enter some values</div>: this.completeDataValid() == false && this.state.updateCalled ? <div class = "error" >Some fields are invalid, Try Again</div> : null}
          
 
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
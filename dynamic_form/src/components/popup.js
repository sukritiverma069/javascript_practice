import React from 'react';
import './styles1.css';

//import { ReactComponent } from '*.svg';

class Popup extends React.Component {
 constructor(props){
   super(props);

   
  
 }

 
render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1>{this.props.text}</h1> */}
          <Project currentRow = {this.props.currentRow}  closePopup={this.props.closePopup} updateTable = {this.props.updateTable}/>
          
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
  
    this.handleReset = this.handleReset.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleInputChange(event){
   
    let changedKey = event.target.name;
    let changedValue = event.target.value;

    console.log(this.state.projectValues)
  console.log(JSON.stringify(this.state.projectValues));

     
     //let changedState =this.state.projectValues;  // creating copy of state variable
     //changedState[changedKey] =changedValue;                     
     this.setState(prevState => ({
      projectValues: {                   // object that we want to update
          ...prevState.projectValues,    // keep all other key-value pairs
          [changedKey]: changedValue       // update the value of specific key
          
      }
      
  }))
  
  
  }
  

  handleReset(event){
    let original = this.props.currentRow
    this.setState({projectValues: original})
    
  }

  handleSave(event){
    {this.props.updateTable(this.state.projectValues) }
  }

  handleSubmit(event){
    event.preventdefault();
    fetch('/',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({editedData:this.state.projectValues})
    })
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
          <div className = "column">
          <a href="#" onClick={this.handleSave} >Save</a>
          </div>
          <div className = "column">
          <a href="#" onClick={this.handleReset} >Reset</a>
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
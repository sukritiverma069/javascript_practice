import React from 'react';
import './styles1.css';

//import { ReactComponent } from '*.svg';

class Popup extends React.Component {

  

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1>{this.props.text}</h1> */}
          <Project currentRow = {this.props.currentRow}  />
        <button onClick={this.props.closePopup}>close me</button>
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
  }

  handleInputChange(event){
   
    let changedKey = event.target.name;
    let changedValue = event.target.value;

     console.log('key')
     console.log(changedKey)
     console.log('value')
     console.log(changedValue)
     
     let changedState =this.state.projectValues;  // creating copy of state variable
     changedState[changedKey] =changedValue;                     
     this.setState( {projectValues : changedState} )


  
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

      </div>

    );
  }
}


export default Popup;
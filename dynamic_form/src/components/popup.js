import React from 'react';
import './styles1.css';
//import { ReactComponent } from '*.svg';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          {/* <h1>{this.props.text}</h1> */}
          <ProjectList currentRow = {this.props.currentRow} />
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

class ProjectList extends React.Component {

  render() {
    return(
      <div class = "list-container">
        <ul class = "list_item">
          {
            Object.keys(this.props.currentRow).map( (k) => {
              // return <li>  {k} --> {this.props.currentRow[k]} </li>
              return <li> {k}  : <input type ="text" name={k} value ={this.props.currentRow[k]}></input> </li>
            } )
          }
          
        </ul>

      </div>

    );
  }
}


export default Popup;
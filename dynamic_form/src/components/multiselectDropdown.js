import React, { Component } from 'react';
import './multiSelectDrop.css';
import Multiselect from './multiselectIndex';

const data = [{
  name: 'R',
  value: 'R'
},
{
  name: 'UC',
  value: 'UC'
  },
  {
  name: 'N',
  value: 'N'
  }];


class MultiDropdown extends Component {
  selectedValues(params) {
    console.log("the data is " +params);
    
  }
  render() {
    
    return (
      <div className="App">
        <Multiselect options={data} onSelectOptions={this.props.multiSelectCallback} preChecked={this.props.checkedValues}/>
        
        
      </div>
      
    );
    
  }
}
export default MultiDropdown;
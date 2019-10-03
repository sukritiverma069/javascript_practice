import React, { Component } from 'react';
import './multiSelectDrop.css';
import Multiselect from './multiselectIndex';

const data = [{
  name: 'one',
  value: 'one'
},
{
    name: 'two',
    value: 'two'
  },
  {
    name: 'three',
    value: 'three'
  },
  {
    name: 'four',
    value: 'four'
  },
  {
    name: 'five',
    value: 'five'
  },
  {
    name: 'six',
    value: 'six'
  }];
class MultiDropdown extends Component {
  result(params) {
    console.log(params);
  }
  render() {
    return (
      <div className="App">
        <Multiselect options={data} onSelectOptions={this.result} />
      </div>
    );
  }
}
export default MultiDropdown;
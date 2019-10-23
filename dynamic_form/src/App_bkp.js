import React, { Component } from 'react';
import './App.css';
import Table1 from './components/Table1';
import {Login} from './components/login'

 

 
 
class Main extends Component {
  render() {
    return (
      <div className="App">
       <p className="Table-header">Project Details</p>
        
        <Table1/>
      </div>
    );
  }
}

export default Main;


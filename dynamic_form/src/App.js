import React, { Component } from 'react';
import './App.css';
import Table1 from './components/test';
import Table2 from './components/table2';

 

 
 
class Main extends Component {
  render() {
    return (
      <div className="App">
       <p className="Table-header">Project Details</p>
        {/* <Table1 data={fetchResult}/> */}
        <Table1/>
      </div>
    );
  }
}

export default Main;




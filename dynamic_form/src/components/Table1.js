import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import './react-bootstrap-table.css';
import {Edit} from './edit'

let getEditComponent = function editButton(cell, row){
  return <Edit rowData = {row} updateTableData = {(p) => this.updateTable(p)}/>;
}

class NameEditor extends React.Component {
  constructor(props) { 
    console.log('printing props of nameeditor component')
    console.log(props);
    super(props);
    this.updateData = this.updateData.bind(this);
    this.state = {
      name: props.defaultValue,
      open: true
    };
  }
  focus() {
    this.refs.inputRef.focus();
    
  }
  updateData() {
    this.props.onUpdate(this.state.name);
    console.log('inside updateData');
    
  }
  close = () => {
    this.setState({ open: false });
    this.props.onUpdate(this.props.defaultValue);
  
  }
  render() {
    const fadeIn = this.state.open ? 'in' : '';
    const display = this.state.open ? 'block' : 'none';
    return (
      <div className={ `modal fade ${fadeIn}` } id='myModal' role='dialog' style={ { display } }>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-body'>
              <input
                ref='inputRef'
                className={ ( this.props.editorClass || '') + ' form-control editor edit-text' }
                style={ { display: 'inline-block', width: '70%' } }
                type='text'
                value={ this.state.name }
                onChange={ e => { this.setState({ name: e.currentTarget.value }); } } />
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-primary' onClick={ this.updateData }>Save</button>
              <button type='button' className='btn btn-default' onClick={ this.close }>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Table1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results : []
        };

        this.fetchResults();
        this.updateTable = this.updateTable.bind(this);
      }

       fetchResults(){ 
        fetch("http://localhost/project-details-backend/api/project/read.php")
        .then(response =>    response.json())
        .then( p => {
          //console.log( p.database_response);
          this.setState({results : p.records }) ;
          }).catch(error => {
            console.log(error);
        });

        }

        //event handler for on click save event
   updateTable(updatedData){
    console.log('inside table update data');
    console.log(updatedData);
    this.setState({results : updatedData})
    
   }
        


  render() {
    const cellEdit = {
      mode: 'click' // click cell to edit
    };
    const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);

    

    return (
      <div>
         {
             console.log( this.state.results)
         } 
         
        <BootstrapTable data={this.state.results} search = 'true' searchPlaceholder='type to filter projects' cellEdit={cellEdit} pagination= 'true' >
        <TableHeaderColumn dataField='edit' dataFormat={getEditComponent} editable={false} >
          
          </TableHeaderColumn> 
          <TableHeaderColumn isKey dataField='projectId'>
          Project Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='cityid' editable={false}>
          Builder Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='localityid' customEditor={ { getElement: createNameEditor } }>
          localityid
          </TableHeaderColumn>
          <TableHeaderColumn dataField='project_name' editable={false} >
          project_name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='builderid' editable={false}>
          builderid
          </TableHeaderColumn>
          <TableHeaderColumn dataField='builder_name' editable={false}>
          builder_name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='property_type' editable={false}>
          Property Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='construction_status' editable={false}>
          Construction Status
          </TableHeaderColumn>
           
        </BootstrapTable>
      </div>
    );
  }
}


export default Table1;


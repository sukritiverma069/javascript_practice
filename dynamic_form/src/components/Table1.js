import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import './react-bootstrap-table.css';
import {Edit} from './edit'

let getEditComponent = function editButton(cell, row){
  return <Edit rowData = {row}/>;
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
      }

       fetchResults(){ 
        fetch("http://localhost/static_data/db_response2.json")
        .then(response =>    response.json())
        .then( p => {
          //console.log( p.database_response);
          this.setState({results : p.database_response}) ;
          }).catch(error => {
            console.log(error);
        });

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
         
        <BootstrapTable data={this.state.results} search = 'true' searchPlaceholder='type to filter projects' cellEdit={cellEdit} >
          <TableHeaderColumn isKey dataField='projectid'>
          projectid
          </TableHeaderColumn>
          <TableHeaderColumn dataField='builderid' editable={false}>
          builderid
          </TableHeaderColumn>
          <TableHeaderColumn dataField='projectname' customEditor={ { getElement: createNameEditor } }>
          projectname
          </TableHeaderColumn>
          <TableHeaderColumn dataField='buildername' editable={false} >
          buildername
          </TableHeaderColumn>
           <TableHeaderColumn dataField='edit' dataFormat={getEditComponent} editable={false}>
          
          </TableHeaderColumn> 
        </BootstrapTable>
      </div>
    );
  }
}


export default Table1;


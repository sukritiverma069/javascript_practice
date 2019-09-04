import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
import './react-bootstrap-table.css';
import './react-bootstrap-table.min.css';
import {Edit} from './edit'
// import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table'



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
            results : [],
            rowClickedIndex : -1
        };

        this.fetchResults();
        
         this.tableCallback = this.tableCallback.bind(this);
         this.onRowClick = this.onRowClick.bind(this);
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

        onRowClick(row,columnIndex,rowIndex) {
          this.setState({rowClickedIndex:rowIndex})
        }
            

        tableCallback(dataFromEdit){
          console.log('inside table callback')
          let newResults = [...this.state.results];
          newResults[this.state.rowClickedIndex] = dataFromEdit
          this.setState({results:newResults})
      }
          
        

      
                
   render() {
    const cellEdit = {
      mode: 'click' // click cell to edit
    };
    const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);

    const options = {
      onRowClick: this.onRowClick
    };

    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true
    };

    

    

    return (
      <div>
         {
             console.log( this.state.results)
         } 
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous"></link>


        <BootstrapTable class = 'table table-striped' data={this.state.results} selectRow={ selectRow } insertRow = {true} deleteRow={true} search = {true} searchPlaceholder='type to filter projects' cellEdit={cellEdit} pagination= {true} options={ options }>
        {/* <TableHeaderColumn dataField='edit' dataFormat={getEditComponent} editable={false} > */}
        <TableHeaderColumn dataField='edit' dataFormat={ (cell, row) => <Edit rowData = {row}  callbackFromTable = {this.tableCallback }/>} editable={false} >
          
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


import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn, DeleteButton, InsertButton} from 'react-bootstrap-table';
import './Table.css';
import './react-bootstrap-table.css';
import './react-bootstrap-table.min.css';
import {Edit} from './edit'
import Popup from './popup';





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
            rowClickedIndex : -1,
            selectedRow : {},
            showCreatePopup : false,
            updateType:"CREATE"
        };

        this.fetchResults();
        this.tableCallback = this.tableCallback.bind(this);
         this.onRowClick = this.onRowClick.bind(this);
         this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
         this.handleInsertButtonClick = this.handleInsertButtonClick.bind(this);
         this.handleRowSelect = this.handleRowSelect.bind(this);
         this.toggleCreatePopup = this.toggleCreatePopup.bind(this);
         this.initializeNewData = this.initializeNewData.bind(this)
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

        handleRowSelect(row, isSelected, e) {
        this.setState({selectedRow:row})
        }

       
            

        tableCallback(dataFromEdit){
          console.log('inside table callback')
          let newResults = [...this.state.results];
          newResults[this.state.rowClickedIndex] = dataFromEdit
          this.setState({results:newResults})
      }

      handleDeleteButtonClick = (onClick) => {
       
        fetch('http://localhost/project-details-backend/api/project/delete.php', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(this.state.selectedRow)
          
        })
        .then(res => res.text('detail has been logged')) // OR res.json()
        .then(res => console.log('project has been deleted'))
        console.log('This is my custom function for DeleteButton click event');
        onClick();
      }

      createCustomDeleteButton = (onClick) => {
        return (
          <DeleteButton
            btnText='Delete'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => this.handleDeleteButtonClick(onClick) }/>
        );
      }

      handleInsertButtonClick = () => {
        this.toggleCreatePopup();
        

        console.log('inside handle insert')
        
        
      }

      createCustomInsertButton = () => {
        return (
          <InsertButton
            btnText='New'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-plus'
            onClick={ () => this.handleInsertButtonClick() }/>
        );
      }
      
      toggleCreatePopup() {
        this.setState({
          showCreatePopup: !this.state.showCreatePopup
        });
      }

      initializeNewData(){
        let temp = {}
        let allKeys = Object.keys(this.state.results[0])

        for(let i=0; i<allKeys.length; i++){
          if(allKeys[i] != "ID"){
            temp[allKeys[i]] = "";
          }

          }

        return temp;
      }
      

      
                
   render() {
    const cellEdit = {
      mode: 'click' // click cell to edit
    };
    const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);

    const options = {
      onRowClick: this.onRowClick,
      deleteBtn: this.createCustomDeleteButton,
      insertBtn: this.createCustomInsertButton
    };

    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true,
      onSelect: this.handleRowSelect
    };

    


    return (
      <div>
      
        <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.css"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous"></link>


        <BootstrapTable class = 'table table-striped' keyField = 'ID' data={this.state.results} selectRow={ selectRow } insertRow = {true} deleteRow={true} search = {true} searchPlaceholder='type to filter projects' cellEdit={cellEdit} pagination= {true} options={ options }>
        {/* <TableHeaderColumn dataField='edit' dataFormat={getEditComponent} editable={false} > */}

        {/* <TableHeaderColumn dataField='ID' isKey>
          Id
          </TableHeaderColumn> */}



        <TableHeaderColumn dataField='edit' dataFormat={ (cell, row) => <Edit rowData = {row}  callbackFromTable = {this.tableCallback }/>} editable={false} >
          </TableHeaderColumn> 
          
          <TableHeaderColumn dataField='projectId'>
          Project Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='cityid' editable={false}>
          Builder Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='localityid' customEditor={ { getElement: createNameEditor } }>
          Locality Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='project_name' editable={false} >
          Project Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='builderid' editable={false}>
          Builder Id
          </TableHeaderColumn>
          <TableHeaderColumn dataField='builder_name' editable={false}>
          Builder Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='property_type' editable={false}>
          Property Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='construction_status' editable={false}>
          Construction Status
          </TableHeaderColumn>
           
        </BootstrapTable>
        {this.state.showCreatePopup ?
          <Popup
           text='Click "Close Button" to hide popup'
           closePopup={this.toggleCreatePopup}
           currentRow = {this.initializeNewData()}
           //updatetype will either be update or create
           updateType = {this.state.updateType}
           callbackFromEdit ={this.tableCallback}
          />
          : null
        }


      </div>
    );
  }
}


export default Table1;


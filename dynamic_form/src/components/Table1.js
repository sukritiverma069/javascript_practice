import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn, DeleteButton, InsertButton, SizePerPageDropDown} from 'react-bootstrap-table';
import './Table.css';
import './bootstrap.min.css';
import './react-bootstrap-table-all.min.css';
import {Edit} from './edit';
import Popup from './popup';
import {Dropdown} from './dropdown';





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
            updateType:"CREATE",
            selectedOption: null
        };

        this.fetchResults();
        this.tableCallback = this.tableCallback.bind(this);
         this.onRowClick = this.onRowClick.bind(this);
         this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
         this.handleInsertButtonClick = this.handleInsertButtonClick.bind(this);
         this.handleRowSelect = this.handleRowSelect.bind(this);
         this.toggleCreatePopup = this.toggleCreatePopup.bind(this);
         this.initializeNewData = this.initializeNewData.bind(this);
         this.handleChange = this.handleChange.bind(this)
         
      }
      
       fetchResults(){ 
        fetch("http://localhost/project-details-backend/api/project/read_2.php?table=project_details")
        .then(response => response.json())
        .then( p => {
          console.log( 'inside fetchResults')
          console.log( p.records);
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
       
        fetch('http://localhost/project-details-backend/api/project/delete.php?table=project_details', {
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
            onClick={ () => this.handleDeleteButtonClick(onClick) } style = {{'margin-left': '-440px', 'border-left': '2px solid dark-orange'}}/>
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
            onClick={ () => this.handleInsertButtonClick() } style = {{'margin-left': '-500px'}}/>
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
          if(allKeys[i] != "ID" && allKeys[i] !== "edit" && allKeys[i] !== "dropdown" && allKeys[i] !== "inserted"){
            temp[allKeys[i]] = "";
          }

          }

        return temp;
      }

      

      renderSizePerPageDropDown = props => {
        return (
          <div className='btn-group dropDown'>
            {
              [ 10, 25, 30 ].map((n, idx) => {
                const isActive = (n === props.currSizePerPage) ? 'active' : null;
                return (
                  <button key={ idx } type='button' className={ `btn btn-info ${isActive}` } onClick={ () => props.changeSizePerPage(n) }  >{ n }</button >
                );
              })
            }
          </div>
        );
      }

      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
               
   render() {
    
    const { selectedOption } = this.state;
    const cellEdit = {
      mode: 'click' // click cell to edit
    };
    const createNameEditor = (onUpdate, props) => (<NameEditor onUpdate={ onUpdate } {...props}/>);

    const options = {
      onRowClick: this.onRowClick,
      deleteBtn: this.createCustomDeleteButton,
      insertBtn: this.createCustomInsertButton,
      SizePerPageDropDown: this.renderSizePerPageDropDown
    };

    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true,
      onSelect: this.handleRowSelect
    };

    return (
      <div>
      
        {/* <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.css"></link> */}
        {/* <link rel="stylesheet" href="https://stackpath.blootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossOrigin="anonymous"></link> */}

        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossOrigin="anonymous"></link> */}

     

        <BootstrapTable class = 'table table-striped' keyField = 'ID' data={this.state.results } selectRow={ selectRow } insertRow = {true} deleteRow={true} search = {true} searchPlaceholder='type to filter projects' cellEdit={cellEdit} pagination= {true} options={ options }>
 
        {this.state.results.length > 0 ? Object.keys(this.state.results[0]).map((column) => {
          
          { if( column != "edit" && column != "dropdown" && column != "ID" && column != "inserted") {
            return(<TableHeaderColumn  dataField={column}  editable={false} > {column} </TableHeaderColumn>)
          }else if( column == "edit"){
            return (<TableHeaderColumn dataField='edit' dataFormat={ (cell, row) => <Edit rowData = {row}  callbackFromTable = {this.tableCallback }/>} editable={false} ></TableHeaderColumn>)
          }else if( column == "dropdown"){
            return (<TableHeaderColumn dataField='dropdown' dataFormat={ (cell, row) => <Dropdown/>} editable={false}>
            DropDown
          </TableHeaderColumn>)
          }
          
           
        }}) : <div></div>}  
                     
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


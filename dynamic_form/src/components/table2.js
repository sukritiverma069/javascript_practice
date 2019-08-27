import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 
       'react-bootstrap-table'
import './Table.css'
import './react-bootstrap-table-all.min.css'

 
 
class Table2 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
                             dataField='id'
                             dataAlign='center'
                             headerAlign="left"
                             width="30"
                             tdStyle={
                                 {backgroundColor: 'green'}}>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
                             dataAlign='center'
                             headerAlign="center"
                             width="20%"
                             thStyle={
                                 {fontWeight: 'lighter', 
                                 color: 'red'}}>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
                             dataAlign='center'
                             headerAlign="right">
            Value
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table2
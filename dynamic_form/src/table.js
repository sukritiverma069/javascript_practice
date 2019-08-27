import React from 'react';
import ReactDOM from 'react-dom';

function getJson() {
    
    return [{ "firstname": "first", "lastname": "f"}, {"firstname": "second", "lastname": "l"}];
  }
  
  class TableComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        json: []
      }
    }
  
    componentDidMount() {
      this.setState((prevState) => {
        return {
          json: getJson()
        }
      })
    }
  
    render() {
      return (
        <div>
          <table>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
            </thead>
            <tbody>
              {this.state.json.map((data, i) => {
                return (
                  <tr key={i}>
                    <td>{data.firstname}</td>
                    <td>{data.lastname}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    }
  }

  export default TableComponent;
  
  
//   ReactDOM.render(
//     <TableComponent />, 
//     document.getElementById("app")
//   );
import React, { Component } from 'react';
//import MDBSelect  from "./mdbreact";

class Dropdown extends Component {

    constructor(props){
        super(props);
        this.state = {}
        }
        
          render() {
              
            return (
              <div>
                <select>
                    <option>SELECT</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>

              </div>
            );
          }
        
    }        
        
export {Dropdown};
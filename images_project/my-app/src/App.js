import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPAge from './searchPage';
import Newtab from './newTab';



class BasicExample extends React.Component {
 constructor(props){
   super(props);
 }

 


 
  render(){
    return (
      <Router>
        <div>
        <Link to="/"></Link>
        <Link to="/Newtab"></Link>
            
      <Switch>
            <Route exact path="/">
              <SearchPAge />
            </Route>
            <Route path="/Newtab">
              <Newtab />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  
  }


export default BasicExample;
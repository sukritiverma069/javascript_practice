import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch,} from 'react-router-dom'
import LoggedIn from './components/loggedIn';
import LoggedOut from './components/loggedOut';
import { Login } from './components/signIn';






class App extends React.Component {
    render(){
        return (
            <Router>
                <ul>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/LoggedIn">LoggedIn</Link></li>
                    <li><Link to="/LoggedOut">LoggedOut</Link></li>
                </ul>
            <Switch>
                    <Route path="/Login" component={Login}/>
                    <Route path="/LoggedIn" component={LoggedIn}/>
                    <Route path="/LoggedOut" component={LoggedOut}/>
        
            </Switch>
          </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));



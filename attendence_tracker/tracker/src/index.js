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
                    <li><Link to="/"></Link></li>
                    <li><Link to="/index.html"></Link></li>
                    <li><Link to="/LoggedIn"></Link></li>
                    <li><Link to="/LoggedOut"></Link></li>
                </ul>
            <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/index.html" component={Login}/>
                    <Route path="/LoggedIn" component={LoggedIn}/>
                    <Route path="/LoggedOut" component={LoggedOut}/>
        
            </Switch>
          </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));



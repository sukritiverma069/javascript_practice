import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link, Switch,} from 'react-router-dom'
import { Login } from './components/login';
import Dashboard from './components/dashboard'






class App extends React.Component {
    render(){
        return (
            <Router>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/index.html"></Link></li>
                    <li><Link to="/Dashboard"></Link></li>
                    
                </ul>
            <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/index.html" component={Login}/>
                    <Route path="/Dashboard" component={Dashboard}/>
                    
        
            </Switch>
          </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import X from './App';
//import Tc from './table';
import * as serviceWorker from './serviceWorker';
import {Edit} from './components/edit';



 


 

ReactDOM.render(<X />, document.getElementById('root'));
// ReactDOM.render(<Edit /> , document.getElementById('root2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css';
import Expense from './components/expense/expense'
// import App from './App';


ReactDOM.render(
    <MuiThemeProvider>
        <HashRouter>
            <div>
                <Route exact path="/" component={Expense}></Route>
            </div>
        </HashRouter>
    </MuiThemeProvider>
    , document.getElementById('root'));



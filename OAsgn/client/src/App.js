import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Expense from './components/expense/expense'
import Setting from './components/setting/index'
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <HashRouter>
          <div>
            <Route exact path="/" component={Expense}></Route>
            <Route exact path="/setting" component={Setting}></Route>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;

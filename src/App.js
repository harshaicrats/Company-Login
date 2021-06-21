import React from 'react';
import Login from './components/Login'
import  Dashboard from './components/Dashboard/Dashboard'
import  {BrowserRouter,Switch,Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login }></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import Register from './components/Register'
import  Dashboard from './components/Dashboard/Dashboard'
import  {BrowserRouter,Switch,Route} from 'react-router-dom';
import Projects from './components/projectDetails'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Register }></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/projects/:companyname" exact component={Projects}></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from './components/Home/homepage.js'
import Nav from './components/NavBars/Nav.js'

function App() {
  return (
    <div className="App">
        <Nav/>
        
        <Switch>
          <Route 
            exact path='/' 
            component={Home}
          />
   
          <Route 
            render={() => <h3> NOT FOUND </h3>} 
          />
        </Switch>

    </div>
  );
}

export default App;

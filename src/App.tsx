  // import React from 'react';
  // import logo from './logo.svg';
// import './App.css';
// import MyComponent from './basic/MyComponent';
import FetchComponent from './fecth/FetchComponent';

import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import ComponentExample from './basic/ComponentExample';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
                <ComponentExample/>      
            </Route>
            <Route path="/fetch">
                <FetchComponent/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;

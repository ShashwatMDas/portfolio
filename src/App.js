import React from 'react';
import './App.css';
import Home from './screens/Home'
import About from './screens/About'
import Resume from './screens/Resume'
import ParticlesBg from 'particles-bg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="bubbles">
      <ParticlesBg type="cobweb" bg={true} num={50} color="#a701e3" />
      </div>
      <Router>
      <Route path="/" exact>
      <Home />
      </Route>
      <Switch>
      <Route path="/about" >
      <About />
      </Route>
      <Route path="/resume" >
        <Resume />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

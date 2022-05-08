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
} from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const starsCount = window.screen.width > 600 ? 35 : 10;


function App() {
  return (
    <ThemeProvider theme={THEME}>
    <div className="App">
      <div className="bubbles">
      <ParticlesBg type="cobweb" bg={true} num={starsCount} color="#b7d0f1ff" />
      </div>
      <Router>
        <Switch>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/resume" >
            <Resume />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Monospace", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

export default App;

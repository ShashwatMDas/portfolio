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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const starsCount = window.screen.width > 600 ? 50 : 10;


function App() {
  return (
    <ThemeProvider theme={THEME}>
    <div className="App">
      <div className="bubbles">
      <ParticlesBg type="cobweb" bg={true} num={starsCount} color="#a701e3" />
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
    </ThemeProvider>
  );
}

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Poppins", "Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

export default App;

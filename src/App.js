import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link 
} from 'react-router-dom';


const Contact = (props) => {
  return(
    <h2>Contact</h2>
  )
}

const About = () => {
  return(
    <h2>About me</h2>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>My Personal Webpage!</h1>
          <Route path="/About" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
  
}

export default App;

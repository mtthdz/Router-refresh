import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  // Link
} from 'react-router-dom';


// const Contact = (props) => {
//   return(
//     <div>
//       <h2>Contact</h2>
//       <Link to="/contact/michelle">Michelle</Link>
//       <Route path="/contact/michelle" component={Michelle} />
//     </div>
//   )
// }

// const Michelle = () => {
//   return(
//     <h2>About Michelle</h2>
//   )
// }

// const About = () => {
//   return(
//     <h2>About me</h2>
//   )
// }

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <h1>My Personal Webpage!</h1>

//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>

//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </div>
//       </Router>
//     );
//   }
  
// }


// conditionally rendering components

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: 1986093012098,
      selectedColor: '#fff'
    }
  }
  render() {
    return (
      <Router>
        <Route path='/dashboard' render={() => { return (<Dashboard userId={this.state.userId} colour={this.state.selectedColor} />) }} />
      </Router>
    )
  }
}
const Dashboard = (props) => {
  return (
    <p>Your user id is  {props.userId} and your color is {props.colour}.</p>
  )
}

export default App;


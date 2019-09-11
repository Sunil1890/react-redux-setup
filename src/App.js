import React, { Component } from 'react';
import './styles/App.scss';
// import Routing  from './components/Routing';
import Login  from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Routing /> */}
        <Login />
      </div>
    );
  }
}

export default App;

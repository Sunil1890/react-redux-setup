import React, { Component } from 'react';
import Posts  from "./components/Posts";
import PostForm  from "./components/PostForm";
import './styles/App.scss';
import Routing  from './components/Routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing />
        {/* <PostForm/>
        <hr />
         <Posts /> */}
      </div>
    );
  }
}

export default App;

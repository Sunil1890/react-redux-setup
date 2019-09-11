import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Posts from './Posts';
import PostForm from './PostForm';
function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/post">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/post" component={Posts} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <PostForm />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default Routing;
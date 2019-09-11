import React, { Component } from 'react';
import { connect } from "react-redux";
import { createPosts } from "../actions/postsActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e){
    e.preventDefault();
    const post ={
      title: this.state.title,
      body: this.state.body
    }
   //call actions
   console.log(post)
   this.props.createPosts(post)
  }
  render() {
    return (
      <div style={{padding: "20px"}}>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text"
              name="title"
              onChange={this.onChange} 
              value={this.state.title} 
            />
          </div>
          <div>
            <label>Body</label><br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createPosts })(PostForm);
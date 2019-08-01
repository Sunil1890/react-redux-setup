import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";

class Posts extends Component {
  componentWillMount() {
    console.log('//2')
    this.props.fetchPosts()
  }
  render() {
    const postItems = this.props.posts.map(data => (
    <div key={data.id}>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
}
}
const mapStateToProps = state => ({
  posts : state.posts.items
});

const mapDispatchToProps = dispatch => ({
  fetchPosts:() => dispatch(fetchPosts())
});
// export default connect(mapStateToProps, { fetchPosts })(Posts); // OR
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
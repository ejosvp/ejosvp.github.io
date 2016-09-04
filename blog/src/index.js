import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import PostList from './components/PostList';
import * as api from './api/githubApi';

const Remarkable = require('remarkable');

class App extends React.Component {
  constructor() {
    super();

    this.state = ({
      posts: [],
    });

    this.listPosts = this.listPosts.bind(this);
    this.listPosts();

    this.getPost = this.getPost.bind(this);
  }

  getPost(filename) {
    api.getFile(filename, (payload) => {
      const md = new Remarkable();
      console.log(md.render(payload));
    });
  }

  listPosts() {
    api.getFileNames((payload) => this.setState({
      posts: payload,
    }));
  }

  render() {
    return (
      <div>
        <Menu />
        <PostList posts={this.state.posts} getPost={this.getPost} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

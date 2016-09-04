import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import PostList from './components/PostList';
import * as api from './api/githubApi';

class App extends React.Component {
  constructor() {
    super();

    this.state = ({
      posts: [],
    });
    this.getPosts = this.getPosts.bind(this);
    this.processPosts = this.processPosts.bind(this);

    this.getPosts();
  }

  getPosts() {
    api.getFiles(this.processPosts);
  }

  processPosts(payload) {
    this.setState({
      posts: payload,
    });
  }

  render() {
    return (
      <div>
        <Menu />
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);

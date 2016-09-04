import React from 'react';
import Post from './Post';

const PostList = (props) => {
  const posts = props.posts.map((post) =>
    <Post key={post.sha} post={post} getPost={props.getPost} />
  );

  return (
    <ul>
      {posts}
    </ul>
  );
};

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired,
  getPost: React.PropTypes.func.isRequired,
};

export default PostList;

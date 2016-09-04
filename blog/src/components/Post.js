import React from 'react';

const Post = (props) => {
  return (
    <li onClick={() => props.getPost(props.post.name)}>{props.post.name}</li>
  );
};

Post.propTypes = {
  post: React.PropTypes.object.isRequired,
  getPost: React.PropTypes.func.isRequired,
};

export default Post;

import React from 'react';

const PostList = (props) => {
  const posts = props.posts.map((post) => <li>{post.name}</li>);

  return (
    <ul>
      {posts}
    </ul>
  );
};

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired,
};

export default PostList;

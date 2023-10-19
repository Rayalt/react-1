import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
	return (
		<React.Fragment>
			<h2 className="heading">
				{title}
			</h2>
			{
				posts.map(
					(post) =>
						<PostItem
							remove={remove}
							post={post}
							key={post.id}
						></PostItem>
				)
			}
		</React.Fragment>
	);
};

export default PostList;
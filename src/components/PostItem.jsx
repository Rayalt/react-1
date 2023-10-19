import React from 'react';
import Button from "./ui/button/Button";

const PostItem = (props) => {
	// console.log(props);
	return (
		<React.Fragment>
			<div className="post post--primary">
				<div className="post__content">
					<h3 className="post__title"
					>
						{props.post.title}
					</h3>
					<p className="post__text">
						{props.post.text}
					</p>
				</div>

				<Button
					btnClass="btn--primary post__btn"
					onClick={() => props.remove(props.post)}
				>
					Удалить
				</Button>
			</div>
		</React.Fragment>
	);
};

export default PostItem;
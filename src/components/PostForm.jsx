import React, {useState} from 'react';
import Input from "./ui/input/Input";
import Button from "./ui/button/Button";

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', text: ''});

	const addNewPost = (e) => {
		e.preventDefault(); // временно чтоб не обновлялась стр

		// const newPost = {
		// 	id: Date.now(),
		// 	title,
		// 	text,
		// }
		const newPost = {
			...post,
			id: Date.now(),
		}
		create(newPost);
		// setPosts([...posts, newPost]);
		// setPosts([...posts, {...post, id: Date.now()}]);
		setPost({title: '', text: ''});
		// setText('');
		// setTitle('');
	};

	return (
		<form className="post-form">
			<Input
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type="text"
				placeholder="Заголовок"
			></Input>
			<Input
				value={post.text}
				onChange={e => setPost({...post, text: e.target.value})}
				type="text"
				placeholder="Описание"
			></Input>
			<Button
				btnClass="btn--primary"
				onClick={addNewPost}
				disabled={!post.title && !post.text}
			>
				Добавить
			</Button>
		</form>
	);
};

export default PostForm;
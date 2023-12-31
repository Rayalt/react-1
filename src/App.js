import React, {useMemo, useState} from "react";
import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/styles.scss';
import PostList from "./components/PostList";
// import Button from "./components/ui/button/Button";
// import Input from "./components/ui/input/Input";
import PostForm from "./components/PostForm";
import Filter from "./components/ui/filter/Filter";
import Section from "./components/dz/1/Section";
import Section2 from "./components/dz/2/Section2";
import Input from "./components/ui/input/Input";

function App() {
	// const [value, setValue] = useState('Какой-то текст в инпуте');

	const [posts, setPosts] = useState([
		{
			id: 1313,
			title: '2 Подтверждено: парад бытовой техники оказался началом великой войны',
			text: '3 Современные технологии достигли такого уровня, что начало повседневной работы ' +
				'по\u00A0формированию позиции однозначно определяет каждого участника как способного ' +
				'принимать собственные решения касаемо поэтапного и\u00A0последовательного развития общества.'
		},
		{
			id: 1212,
			title: '1 Оказывается, в&nbsp;провинциях ещё есть чем поживиться',
			text: '2 Однозначно, сделанные на\u00A0базе интернет-аналитики выводы, инициированные ' +
				'исключительно синтетически, в\u00A0равной степени предоставлены сами себе.'
		},
		{
			id: 1414,
			title: '3 Оказывается, семантический разбор внешних противодействий попахивает безумием',
			text: '1 Высокий уровень вовлечения представителей целевой аудитории является четким ' +
				'доказательством простого факта: понимание сути ресурсосберегающих технологий обеспечивает ' +
				'актуальность стандартных подходов.'
		},
	]);
	const [selectedFilter, setSelectedFilter] = useState('');
	const [searchInput, setSearchInput] = useState('');

	/*const [posts2, setPosts2] = useState([
		{
			id: 1212,
			title: 'Lorem ipsum dolor sit amet',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
				'Aliquid commodi cumque cupiditate eaque eum fuga in incidunt iure ' +
				'libero officiis quia saepe, sed ut vero voluptate. Cum deleniti dolorum saepe.'
		},
		{
			id: 1313,
			title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta harum ' +
				'illo itaque nostrum provident, saepe tempora tenetur? Eum excepturi explicabo illum labore ' +
				'mollitia nam optio reprehenderit sapiente ut vero!'
		},
		{
			id: 1414,
			title: 'Lorem ipsum dolor',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam animi ' +
				'architecto autem commodi corporis earum error esse, et, eum eveniet necessitatibus neque ' +
				'perspiciatis porro praesentium quae quo sed temporibus.'
		},
	]);*/

	// const [title, setTitle] = useState('');
	// const [text, setText] = useState('');

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
	}

	const deletePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const sortedPosts = useMemo(() => {
		console.log('getSortedPosts done');

		if (selectedFilter) {
			// setSelectedFilter(selectedFilter);
			return [...posts].sort((a, b) => a[selectedFilter].localeCompare(b[selectedFilter]));
		}

		return posts;
	}, [selectedFilter, posts]);
	// console.log(sortedPosts);

	/*
	* Хук useMemo сортирует массив и кеширует рез-т (мемоизация), на каждую перерисовку компонента достает рез-т
	* из кеша, если рез-т не меняется, иначе пересчитывает и кеширует заново
	* (помогает уменьшить кол-во перерисовок компонента при поиске например)
	* useMemo(() => {
	* return res;
	}, [variables]);
	* */
	const sortSearchPosts = useMemo(() => {
		return sortedPosts.filter(
			post =>
				post.title.toLowerCase().includes(searchInput.toLowerCase())
				|| post.text.toLowerCase().includes(searchInput.toLowerCase())
		);
	}, [searchInput, sortedPosts]);

	const sortPosts = (sort) => {
		console.log('sortPosts');
		setSelectedFilter(sort);

		setPosts((prevState) =>
			prevState.sort((a, b) => a[sort].localeCompare(b[sort])));

		// setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
		// localeCompare для правильной сортировки букв типа Ö
		// setPosts([...posts].sort((a, b) => a[sort] > b[sort] ? 1 : -1));
	}

	// const getSortedPosts = useMemo(() => {
	// 	sortPosts();
	// },
	// []);

	return (
		<React.Fragment>
			<div className="container">

				<Section/>

				<h2 className="heading">
					Counter функциональный компонент
				</h2>
				<Counter/>
				<Counter/>

				{/*
				<h2 className="heading">
					ClassCounter классовый компонент (устар)
				</h2>
				<ClassCounter></ClassCounter>

				<div>
					<h2 className="heading">
						two way binding
					</h2>
					<h3>
						{value}
					</h3>
					<input
						type="text"
						value={value}
						onChange={event => setValue(event.target.value)}
					/>
				</div>
				*/}

				<h2 className="heading">
					Добавить пост
				</h2>

				<PostForm
					create={createPost}
				></PostForm>

				<Filter
					value={selectedFilter}
					onChange={sortPosts}
					defaultValue="Сортировать"
					options={[
						{
							value: 'title',
							name: 'По названию',
						},
						{
							value: 'text',
							name: 'По описанию',
						}
					]}
				></Filter>

				<Input
					value={searchInput}
					onChange={e => setSearchInput(e.target.value)}
					placeholder="Поиск"
				/>

				{
					sortSearchPosts.length !== 0
						?
						<PostList
							remove={deletePost}
							posts={sortSearchPosts}
							title="Все посты раз"
						></PostList>
						:
						<h2>Ничего нет</h2>
				}


				{/*<PostList
					posts={posts2}
					title="Все посты два"
				></PostList>*/}


				<Section2/>
			</div>

		</React.Fragment>
	);
}

export default App;

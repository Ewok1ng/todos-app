import React from 'react';
import { Input } from 'antd';

import { TodoList } from '@widgets/todo-list';
import { Controls } from '@widgets/controls';
import { TodoType, addTodo, selectTodos } from '@entities/todos';
import { useAppDispatch, useAppSelector } from '@shared/lib/redux';

import styles from './home-page.module.scss';

const options = [
	{ label: 'All', value: 'all' },
	{ label: 'Active', value: 'active' },
	{ label: 'Completed', value: 'completed' }
];

export const Home = () => {
	const todos = useAppSelector(selectTodos);
	const dispatch = useAppDispatch();

	const [activeOption, setActiveOption] = React.useState<string>(
		options[0].value
	);
	const [newTodo, setNewTodo] = React.useState<string>('');

	const activeTodos = todos.reduce((prev, current) => {
		if (current.isActive) {
			return (prev += 1);
		}
		return prev;
	}, 0);

	const filterTodos = (option: string, todos: Array<TodoType>) => {
		switch (option) {
			case 'active':
				return todos.filter(todo => !todo.isActive);
			case 'completed':
				return todos.filter(todo => todo.isActive);
			default:
				return todos;
		}
	};

	const handleAddTodo = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			dispatch(
				addTodo({
					id: Date.now().toString(),
					text: newTodo,
					isActive: false
				})
			);
			setNewTodo('');
		}
	};

	return (
		<div className={styles.home}>
			<div className={styles.container}>
				<div className={styles.home__inner}>
					<h1 className={styles.home__title}>Todos</h1>

					<div className={styles.home__content}>
						<div className={styles.home__input}>
							<Input
								placeholder="What needs to be done?"
								value={newTodo}
								onChange={e => setNewTodo(e.target.value)}
								onKeyDown={handleAddTodo}
							/>
						</div>
						<TodoList
							className={styles.home__todos}
							todos={filterTodos(activeOption, todos)}
						/>
						<Controls
							options={options}
							activeOption={activeOption}
							setActiveOption={setActiveOption}
							activeTodosCount={activeTodos}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

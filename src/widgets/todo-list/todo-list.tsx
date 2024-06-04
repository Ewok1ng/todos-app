import React from 'react';

import classNames from 'classnames';

import { useAppDispatch } from '@shared/lib/redux';
import { TodoItem, TodoType, toggleTodoIsActive } from '@entities/todos';

import styles from './todo-list.module.scss';

export interface Props {
	todos: Array<TodoType>;
	className: string;
}

export const TodoList = ({ todos, className }: Props) => {
	const dispatch = useAppDispatch();

	const toggleIsActive = (id: string) => {
		dispatch(toggleTodoIsActive({ id }));
	};

	return (
		<ul className={classNames(styles.list, className)} data-testid="todo-list">
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					isActive={todo.isActive}
					toggleIsActive={() => toggleIsActive(todo.id)}
				/>
			))}
		</ul>
	);
};

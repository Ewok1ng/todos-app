import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Todo } from './types';

export interface TodosState {
	todos: Array<Todo>;
}

const initialState: TodosState = {
	todos: [
		{
			id: '1',
			text: 'Тестовое задание',
			isActive: true
		},
		{
			id: '2',
			text: 'Прекрасный код',
			isActive: false
		},
		{
			id: '3',
			text: 'Покрытие тестами',
			isActive: true
		}
	]
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos = [...state.todos, action.payload];
		},
		toggleTodoIsActive: (state, action: PayloadAction<Pick<Todo, 'id'>>) => {
			state.todos = state.todos.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						isActive: !todo.isActive
					};
				}
				return todo;
			});
		},
		clearCompletedTodos: state => {
			state.todos = state.todos.filter(todo => !todo.isActive);
		}
	}
});

export const { addTodo, toggleTodoIsActive, clearCompletedTodos } =
	todosSlice.actions;
export const { reducer: todosReducer } = todosSlice;

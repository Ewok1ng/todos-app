import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@app/store';

const selectBase = createSelector(
	(state: RootState) => state,
	state => state.todosSlice
);

export const selectTodos = createSelector(selectBase, state => state.todos);

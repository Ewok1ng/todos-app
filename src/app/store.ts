import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { todosReducer } from '@entities/todos';

const rootReducer = combineReducers({
	todosSlice: todosReducer
});

export const store = configureStore({
	reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

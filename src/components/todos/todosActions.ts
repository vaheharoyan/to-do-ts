import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction<string>('todos/add');
export const removeTodo = createAction<number>('todos/remove');
export const toggleTodo = createAction<number>('todos/toggle');
export const editTodo = createAction<{ id: number; text: string }>('todos/edit');
export const clearCompleted = createAction('todos/clearCompleted');

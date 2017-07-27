import { Action } from 'redux';

let nextTodoId: number = 0;

export const ADD_TODO: string = 'ADD_TODO';
export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO: string = 'TOGGLE_TODO';

export interface AddTodoAction extends Action {
    type: typeof ADD_TODO;
    id: number;
    text: string;
}

export function addTodo (text: string): AddTodoAction {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}

export interface SetVisibilityFilterAction extends Action {
    type: typeof SET_VISIBILITY_FILTER;
    filter: string;
}

export function setVisibilityFilter(filter: string): SetVisibilityFilterAction {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

export interface ToggleTodoAction extends Action {
    type: typeof TOGGLE_TODO;
    id: number;
}

export function toggleTodo (id: number): ToggleTodoAction {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export type TodoAction = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction;

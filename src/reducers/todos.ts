import { Action } from 'redux';

import { TodoAction } from '../actions';

export interface Todo {
    readonly id: number;
    readonly text: string;
    readonly completed: boolean;
}

const initialState: Todo[] = [];

function todos (state: Todo[] = initialState, action: TodoAction): Todo[] {
    switch (action.type) {
    case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];
    case 'TOGGLE_TODO':
        return state.map((todo: Todo) =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
        return state;
    }
}

export default todos;

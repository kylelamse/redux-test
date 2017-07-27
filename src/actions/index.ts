let nextTodoId: number = 0;

interface TodoAction {
    type: string;
    id?: number;
    text?: string;
    filter?: string;
}
export const addTodo: (text: string) => TodoAction = (text: string): TodoAction => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter: (filter: string) => TodoAction = (filter: string): TodoAction => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo: (id: number) => TodoAction = (id: number): TodoAction => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

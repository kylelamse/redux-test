import * as React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

interface Todo {
    id: number;
}

interface Props {
    todos?: Todo[];
    onTodoClick?: (id: number) => any;
}

const TodoList: React.SFC<Props> = ({ todos, onTodoClick }: Props) => (
  <ul>
    {todos.map((todo: Todo) => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;

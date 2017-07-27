import * as React from 'react';
import PropTypes from 'prop-types';

interface Props {
    onClick?: () => any;
    completed?: boolean;
    text?: string;
}

const Todo: React.SFC<Props> = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

export default Todo;

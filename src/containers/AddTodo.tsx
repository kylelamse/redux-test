import * as React from 'react';
import { connect } from 'react-redux';
import * as Redux from 'redux';
import { addTodo } from '../actions';

interface Props {
    dispatch: () => any;
}

function AddTodo ({ dispatch }: Props) {
    let input;

    return (
    <div>
      <form
        onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}
      >
        <input
          ref={(node) => {
              input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
    );
}

export default connect<{}, void, {}>(() => ({ foo: ''}))(AddTodo);

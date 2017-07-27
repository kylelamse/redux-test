import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export interface State {}

const todoApp: State = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;

import { combineReducers } from 'redux';

import {
  createTaskAction,
  deleteTaskAction,
  getTaskAction,
  tasksReducers,
  updateTaskAction
} from './tasks';

export { default as configureStore } from './config/configureStore';

export const reducers = combineReducers({
  tasks: tasksReducers
});

export const actions = {
  createTaskAction,
  deleteTaskAction,
  getTaskAction,
  updateTaskAction
};

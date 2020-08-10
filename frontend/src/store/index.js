import { combineReducers } from 'redux';

import {
  changeTaskStatusAction,
  createTaskAction,
  deleteTaskAction,
  getTaskAction,
  getTaskByTypeAction,
  tasksReducers,
  updateTaskAction
} from './tasks';

export { default as configureStore } from './config/configureStore';

export const actions = {
  changeTaskStatusAction,
  createTaskAction,
  deleteTaskAction,
  getTaskAction,
  getTaskByTypeAction,
  updateTaskAction
};

export const reducers = combineReducers({
  tasks: tasksReducers
});

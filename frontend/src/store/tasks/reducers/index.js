import {
  GET_TASKS_LIST, GET_TASKS_LIST_BY_TYPE,
  UPDATE_TASK
} from '../types';
import getTaskByTypeReducer from './get-task-by-type.reducer';
import getTaskReducer from './get-task.reducer';
import updateTaskReducer from './update-task.reducer';

export const initialState = {
  doing: {},
  done: {},
  todo: {}
};

export const tasksReducers = (state = initialState, payload) => {
  switch (payload.type) {
    case UPDATE_TASK:
      return updateTaskReducer;
    case GET_TASKS_LIST:
      return getTaskReducer(state, payload);
    case GET_TASKS_LIST_BY_TYPE:
      return getTaskByTypeReducer(state, payload);
    default:
      return state;
  }
};

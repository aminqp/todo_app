import {
  CREATE_TASK, DELETE_TASK, GET_TASKS_LIST, UPDATE_TASK
} from '../types';
import creatTaskReducer from './create-task-reducer';
import deleteTaskReducer from './delete-task-reducer';
import getTaskReducer from './get-task-reducer';
import updateTaskReducer from './update-task-reducer';

export const initialState = {
  doing: {},
  done: {},
  todo: {}
};

export const tasksReducers = (state = initialState, payload) => {
  switch (payload.type) {
    case CREATE_TASK:
      return creatTaskReducer(state, payload);
    case UPDATE_TASK:
      return updateTaskReducer;
    case DELETE_TASK:
      return deleteTaskReducer(state, payload);
    case GET_TASKS_LIST:
      return getTaskReducer(state, payload);
    default:
      console.log(' tasksReducers => state -> ', state);
      return state;
  }
};

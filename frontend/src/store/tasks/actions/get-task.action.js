import { TasksCollection } from '../../../apis';
import { GET_TASKS_LIST } from '../types';

export default () => (dispatch) => Promise.all([
  TasksCollection.list({
    params: {
      filter_by__status__: 'todo',
      sort_by__createdAt__: -1
    }
  }),
  TasksCollection.list({
    params: {
      filter_by__status__: 'doing',
      sort_by__createdAt__: -1
    }
  }),
  TasksCollection.list({
    params: {
      filter_by__status__: 'done',
      sort_by__createdAt__: -1
    }
  })
]).then((response) => {
  dispatch({
    data: {
      doing: response[1].data,
      done: response[2].data,
      todo: response[0].data
    },
    type: GET_TASKS_LIST
  });
});

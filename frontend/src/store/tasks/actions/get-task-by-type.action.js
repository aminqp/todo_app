import { TasksCollection } from '../../../apis';
import { GET_TASKS_LIST_BY_TYPE } from '../types';

export default (type, sort) => (dispatch) => new Promise((resolve, reject) => {
  TasksCollection.list({
    params: {
      filter_by__status__: type,
      sort_by__createdAt__: sort || -1
    }
  }).then((response) => {
    dispatch({
      data: {
        [type]: response.data
      },
      type: GET_TASKS_LIST_BY_TYPE
    });
    resolve(response);
  })
    .catch((e) => {
      reject(e);
    });
});

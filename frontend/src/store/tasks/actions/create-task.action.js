import { TasksCollection } from '#apis';

import getTasksByType from './get-task-by-type.action';

export default (formData) => async (dispatch) => TasksCollection.create(formData)
  .then(
    (response) => {
      dispatch(getTasksByType('todo'));
    }
  )
  .catch((e) => {
  });

import { TasksCollection } from '#apis';

import getTasksByType from './get-task-by-type.action';

export default (data) => (dispatch) => TasksCollection
  .update(data._id, {
    description: data.description,
    name: data.name
  })
  .then((response) => {
    dispatch(getTasksByType(data.status));
    return true;
  })
  .catch((e) => false);
/* TODO-qp::
*   1) handle error
* */

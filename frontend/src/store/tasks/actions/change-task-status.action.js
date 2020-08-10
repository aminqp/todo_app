/* eslint-disable */
import getTasksByType from '#store/tasks/actions/get-task-by-type.action';
import { TasksCollection } from '../../../apis';


export default (actionType, data) => (dispatch) => {
  return TasksCollection
    .update(data._id,{"status": actionType})
    .then(response=>{
      dispatch(getTasksByType(data.status));
      dispatch(getTasksByType(actionType));
      return true
    })
    .catch(e=>{
        /* TODO-qp::
        *   1) handle error
        * */
      return false
    })
}

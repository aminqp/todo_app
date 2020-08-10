/* eslint-disable */
import getTasksByType from '#store/tasks/actions/get-task-by-type.action';
import { TasksCollection } from '../../../apis';


export default (data) => (dispatch) => {
  return TasksCollection.remove(data._id)
    .then(res=>{
      dispatch(getTasksByType(data.status));
      return true
    })
    .catch(e=>{
      /* TODO-qp:: handle error
      *   */
      return false
    })
}

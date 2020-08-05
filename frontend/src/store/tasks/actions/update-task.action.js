/* eslint-disable */
import { UPDATE_TASK } from '../types';


export default (data) => (dispatch) => {
  
  /*
  TODO-qp::
   1) call create api then dispatch
  * */
  
  return  dispatch({
    type: UPDATE_TASK,
    data,
  });
}

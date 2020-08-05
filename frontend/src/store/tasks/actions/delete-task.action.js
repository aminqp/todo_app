/* eslint-disable */
import { DELETE_TASK } from '../types';


export default (direction) => (dispatch) => {
  
  /*
  TODO-qp::
   1) call create api then dispatch
  * */
  
  return  dispatch({
    type: DELETE_TASK,
    direction,
  });
}

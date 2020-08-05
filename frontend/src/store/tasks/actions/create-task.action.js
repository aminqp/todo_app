/* eslint-disable */
import { CREATE_TASK } from '../types';


export default (direction) => (dispatch) => {
  
  /*
  TODO-qp::
   1) call create api then dispatch
  * */
  
  return  dispatch({
    type: CREATE_TASK,
    direction,
  });
}

/* eslint-disable */
import { APP_REST_BASIC_URL } from '../types';


export default (direction) => (dispatch) =>
  dispatch({
    type: APP_REST_BASIC_URL,
    direction,
  });

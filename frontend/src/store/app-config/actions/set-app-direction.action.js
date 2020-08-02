/* eslint-disable */
import { APP_DIRECTION } from '../types';


export default (direction) => (dispatch) =>
  dispatch({
    type: APP_DIRECTION,
    direction,
  });

/* eslint-disable */
import { APP_RESET_CONFIGS } from '../types';


export default (direction) => (dispatch) =>
  dispatch({
    type: APP_RESET_CONFIGS,
    direction,
  });

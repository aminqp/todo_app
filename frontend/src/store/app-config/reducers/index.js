import { APP_DIRECTION, APP_RESET_CONFIGS, APP_REST_BASIC_URL } from '../types';
import appRestBasicUrlReducer from './app-basic-url.reducer';
import appDirectionReducer from './app-direction.reducer';

export const initialState = {
  defaultLanguage: 'fa',
  direction: 'rtl',
  restUrl: `${process.env.REACT_APP_HTTP_BASE_URL}/${process.env.REACT_APP_HTTP_API_VERSION}`
};


export const appReducers = (state = initialState, payload) => {
  switch (payload.type) {
    case APP_DIRECTION:
      return appDirectionReducer(state, payload);
    case APP_RESET_CONFIGS:
      return initialState;
    case APP_REST_BASIC_URL:
      return appRestBasicUrlReducer(state, payload);
    default:
      return state;
  }
};

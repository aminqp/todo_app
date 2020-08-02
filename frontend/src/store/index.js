import { combineReducers } from 'redux';

import {
  appReducers,
  restAppConfig,
  setAppDirection,
  setAppRestBasicUrl
} from './app-config';

export { default as configureStore } from './config/configureStore';

export const reducers = combineReducers({
  appConfig: appReducers
});

export const actions = {
  restAppConfig,
  setAppDirection,
  setAppRestBasicUrl
};

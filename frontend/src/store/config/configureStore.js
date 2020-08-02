import path from 'path';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { reducers } from '../index';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import loggerMiddleware from './middleware/logger';

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];

  let composedEnhancers;

  if (process.env.NODE_ENV === 'development') {
    composedEnhancers = composeWithDevTools(...enhancers);
  } else {
    composedEnhancers = compose(...enhancers);
  }

  const store = createStore(
    reducers,
    preloadedState,
    composedEnhancers
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept(
      path.join(__dirname, 'store/redux'),
      () => store.replaceReducer(reducers)
    );
  }

  return { store };
};

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { createLogger } from 'redux-logger';
import DevTools from './containers/DevTools';

import rootReducer from './reducers';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        createLogger()
      ),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // TODO figure out if we can do this better
      // eslint-disable-next-line global-require
      const newRootReducer = require('./reducers').default;

      store.replaceReducer(newRootReducer);
    });
  }

  return store;
};

export default configureStore;

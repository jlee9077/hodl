// import { creatStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import logger from 'redux-logger'
// import { composeWithDevTools} from 'redux-devtools-extension'
// import reducer from './reducer'

// const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware,logger))

// const store = createStore(reducer, middleware)
// export default store

import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);

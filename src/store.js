import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import initialState from './reducers/initial-state'
import reducers from './reducers'
import sagas from './sagas'
//import createLogger from 'redux-logger'

//const logger = createLogger()

export default function configureStore(initState = { ...initialState }) {
  const sagaMiddleware = createSagaMiddleware()
  
  // Create the store with two middlewares
  const middlewares = [
   sagaMiddleware
  //, logger
  ]

  const enhancers = [
    applyMiddleware(...middlewares)
  ]

  const store = createStore(
    reducers,
    initState,
    compose(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run(sagas)
  store.asyncReducers = {} // Async reducer registry

  return store
}

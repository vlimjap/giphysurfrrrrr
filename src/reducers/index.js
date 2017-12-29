import { combineReducers } from 'redux'

import app from './app'
import results from './results'
import searchTerms from './search-terms'
import random from './random'

export default combineReducers({
  app,
  random,
  results,
  searchTerms
})

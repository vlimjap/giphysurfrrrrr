import { 
  call,
  put,
  takeLatest
} from 'redux-saga/effects'
import { 
  APP_ACTIONS, 
  updateResults,
  updateRandom
} from '../actions/app'
import * as api from '../apis'

function* getTrending() {
  yield takeLatest(APP_ACTIONS.GET_TRENDING, getTrendingHandler)
}

function* goSearch() {
  yield takeLatest(APP_ACTIONS.GO_SEARCH, goSearchHandler)
}

function* getRandom() {
  yield takeLatest(APP_ACTIONS.GET_RANDOM, getRandomHandler)
}

/* WORKERS */
function* getTrendingHandler(action) {
  try {
    const { payload } = action
    const { data } = yield call(api.getTrending, payload)

    yield put(updateResults({ data: data}))
  } catch (e) {
    console.error('getTrendingHandler: ', action, e) 
  }
}

function* goSearchHandler(action) {
  try {
    const { payload } = action
    const { data, pagination } = yield call(api.goSearch, payload)

    if (pagination.total_count) {
      yield put(updateResults({ data: data }))  
    } else {
      yield getRandomHandler(action)
    }
    
    
  } catch(e) {
    console.error('goSearchHandler: ', action, e)
  }
}

function* getRandomHandler(action) {
  try {
    const { data } = yield call(api.getRandom)

    yield put(updateRandom({ data: [data] }))
  } catch(e) {
    console.error('getRandomHandler: ', action, e)
  }
}

export {
  getRandom,
  getTrending,
  goSearch
}

import { createAction } from '../utils/util'

export const APP_ACTIONS = {
  APP_INIT: 'APP_INIT',
  ADD_TERM: 'ADD_TERM',
  CLEAR_RESULTS: 'CLEAR_RESULTS',
  GET_TRENDING: 'GET_TRENDING',
  GET_RANDOM: 'GET_RANDOM',
  GO_SEARCH: 'GO_SEARCH',
  UPDATE_RANDOM: 'UPDATE_RANDOM',
  UPDATE_RESULTS: 'UPDATE_RESULTS',
  CLEAR_RANDOM: 'CLEAR_RANDOM'
}

export function appInit() {
  return createAction(APP_ACTIONS.APP_INIT)
}

export function getTrending(payload = {}) {
  return createAction(APP_ACTIONS.GET_TRENDING, payload)
}

export function updateResults(payload = {}) {
  return createAction(APP_ACTIONS.UPDATE_RESULTS, payload)
}

export function goSearch(payload = {}) {
  if (typeof payload === 'string') {
    payload = { 
      search: payload,
      offset: 0
    }
  }
  
  return createAction(APP_ACTIONS.GO_SEARCH, payload)
}

export function clearRandom() {
  return createAction(APP_ACTIONS.CLEAR_RANDOM)
}

export function addTerm(payload = {}) {
  return createAction(APP_ACTIONS.ADD_TERM, payload)
}

export function clearResults() {
  return createAction(APP_ACTIONS.CLEAR_RESULTS)
}

export function getRandom() {
  return createAction(APP_ACTIONS.GET_RANDOM)
}

export function updateRandom(payload = {}) {
  return createAction(APP_ACTIONS.UPDATE_RANDOM, payload)
}
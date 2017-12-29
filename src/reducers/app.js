import initialState from './initial-state'
import { APP_ACTIONS } from '../actions/app'

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case APP_ACTIONS.APP_INIT:
      return {
      	initial_page_load: Date.now()
      }

    default:
      return state
  }
}

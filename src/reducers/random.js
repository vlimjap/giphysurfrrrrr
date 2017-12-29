import initialState from './initial-state'
import { APP_ACTIONS } from '../actions/app'

export default function random(state = initialState, action = {}) {
  const { payload, type } = action

  switch (type) {
    case APP_ACTIONS.UPDATE_RANDOM:
      return payload.data[0]

    case APP_ACTIONS.CLEAR_RANDOM:
      return initialState.random

    default:
      return state
  }
}

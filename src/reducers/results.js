import initialState from './initial-state'
import APP_ACTIONS from '../actions'

export default function results(state = initialState, action = {}) {
  const { payload, type } = action

  switch (type) {
    case APP_ACTIONS.UPDATE_RESULTS:
      const { clear, data } = payload

      return clear ? data : [ ...state, ...data ]

    case APP_ACTIONS.CLEAR_RESULTS:
      return initialState.results

    default:
      return state
  }
}

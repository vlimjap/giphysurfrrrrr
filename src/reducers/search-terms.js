import initialState from './initial-state'
import APP_ACTIONS from '../actions'

export default function results(state = initialState, action = {}) {
  let { payload, type } = action

  switch (type) {
    case APP_ACTIONS.ADD_TERM:
      payload = payload.toLowerCase()
      
      return (state.indexOf(payload) > -1) ? state : [ ...state, payload ]

    default:
      return state
  }
}

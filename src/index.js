import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { APP_ACTIONS } from './actions/app'
import configureStore from './store'
import App from './containers/App'
import registerServiceWorker from './utils/register-service-worker'
import './index.css'

const store = configureStore()

window.onload = () => {
  store.dispatch({ type: APP_ACTIONS.APP_INIT })  
}

ReactDOM.render(
	<Provider store={ store }>
    <App />
	</Provider>
	,
	document.getElementById('root')
)
registerServiceWorker()

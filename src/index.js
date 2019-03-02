import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'

// components
import App from './components/App'

// redux stuff
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers/reducer'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))

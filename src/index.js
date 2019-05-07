
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

// React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components
import App from './components/App'
import Login from './components/auth/Login'

// Initialize redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch >
        <Route path='/' exact component={Login} />
        <Route path='/dashboard' exact component={App} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'))

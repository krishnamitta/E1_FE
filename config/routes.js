import React from 'react'
import store from '../app/store'
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={ history }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ HomeContainer } />
    </Route>
  </Router>
)

module.exports = routes

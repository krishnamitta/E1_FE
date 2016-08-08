import React from 'react'
import store from '../app/store'
import { Router, Route, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { DashboardComponent } from '../app/dashboard/components'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={ history }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ DashboardComponent } />
    </Route>
  </Router>
)

module.exports = routes

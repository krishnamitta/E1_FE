import React from 'react'
import store from '../app/store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from '../app/layout/components'
import DashboardComponent from '../app/dashboard/components'
import NewPRContainer from '../app/purchase_requisition/containers/new_pr_container'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={ history }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ DashboardComponent } />
      <Route path="purchase_requisitions/new" component={ NewPRContainer } />
    </Route>
  </Router>
)

module.exports = routes

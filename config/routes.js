import React from 'react'
import store from '../app/store'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from '../app/layout/components'
import LoginComponent from '../app/auth/components/loginComponent'
import requireAuthentication from '../app/auth/decorators/authenticate_component'
import DashboardComponent from '../app/dashboard/components'
import NewPRContainer from '../app/purchase_requisition/containers/new_pr_container'

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Router history={ history }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ LoginComponent } />
      <Route path="dashboard" component={ requireAuthentication(DashboardComponent) } />
      <Route path="purchase_requisitions/new" component={ requireAuthentication(NewPRContainer) } />
    </Route>
  </Router>
)

module.exports = routes

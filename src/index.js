import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom'

import AdminLayout from './layouts/Admin/Admin.jsx'
import './assets/scss/black-dashboard-react.scss'

const hist = createBrowserHistory()

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" render={props => <AdminLayout {...props} />} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

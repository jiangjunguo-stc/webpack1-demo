import React from 'react'
// import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import { browserHistory, hashHistory, BrowserRouter, Route, Switch, IndexRoute } from 'react-router-dom';

import PageIndex from './pages/PageIndex'

const Routes = () => {
  return(
    <BrowserRouter history={browserHistory}>
      <Route path='/' component = {PageIndex} />
    </BrowserRouter>
  )
}

module.exports = Routes
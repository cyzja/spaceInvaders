import React from 'react'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from '../../pages/Home'
import SpaceInvaders from '../../pages/SpaceInvaders'

export const routeList = {
  home: {
    basePath: '/',
  },
  spaceInvaders: {
    basePath: '/space-invaders',
  },
  notFound: '/404',
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routeList.home.basePath}>
          <Home />
        </Route>
        <Route exact path={routeList.spaceInvaders.basePath}>
          <SpaceInvaders />
        </Route>
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router

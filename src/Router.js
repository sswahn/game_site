import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { config } from './config'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Product from './components/Product'

export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={config.url.home}>
          <Landing />
        </Route>
        <Route exact path={config.url.profile}>
          <Profile />
        </Route>
        <Route exact path="/game">
          <Product />
        </Route>
        <Route exact path={config.url.profile}>
          {/* <Uploads /> */}
        </Route>
        <Route exact path={config.url.profile}>
          {/* <Checkout /> */}
        </Route>
        {/* 
        <Route path="" render={() => {
            //return <SomeComponent />
          }}>
        </Route> 
        */}
      </Switch>
    </BrowserRouter>
  )
}

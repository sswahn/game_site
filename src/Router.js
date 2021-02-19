import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { config } from './config'
//import Landing from './components/Landing'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Product from './components/Product'

export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={config.url.home}>
          
        </Route>
        <Route exact path={config.url.profile}>
          <Profile />
        </Route>
        <Route exact path={config.url.cart}>
          <Cart />
        </Route>
        {/* map over response and output dynamic routes:  */}
        <Route exact path="/game">
          <Product />
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

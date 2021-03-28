import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { config } from './config'
import Profile from './components/Profile'
import Product from './components/Product'

export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={config.url.profile}>
          <Profile />
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

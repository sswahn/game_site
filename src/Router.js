import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { config } from './config'
import Landing from './components/Landing'
import Product from './components/Product'



export default function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={config.url.home}>
          <Landing />
        </Route>
        <Route exact path="/game">
          <Product />
        </Route>
        {/* <Route path="" render={() => {
            //return <SomeComponent />
          }}>
        </Route> */}
      </Switch>
    </BrowserRouter>
  )
}

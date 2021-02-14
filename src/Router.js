import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about"></Route>
        <Route path={() => {
            // return <SomeComponent />
          }}></Route>
      </Switch>
    </BrowserRouter>
  )
}

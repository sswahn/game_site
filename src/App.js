import Provider from './Provider'
import Header from './components/Header'
import Router from './Router'

/**
 * TODO: 
 * Login:
 * create login/registration modal.
 * 
 * Profile page:
 * design profile page, including bio etc. and feed.
 * 
 * Search button:
 * move search button out of input, etc.
 * 
 * Cart:
 * add cart icon/button to header and create cart page
 */

export default function App() {
  return (
    <Provider>
      <Header />
      <Router />
    </Provider>
  )
}

import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header'
import Router from './Router'

/**
 * TODO: 
 * 
 * Fix spacing between caret and search input
 * 
 * Fix Login/Registration form
 * 
 * Create forgot password form
 * 
 * Profile page:
 * design profile page, including bio etc. and feed.
 * 
 * Cart page:
 * create cart page
 */

export default function App() {
  return (
    <Provider>
      <Modal />
      <Header />
      <Router />
    </Provider>
  )
}

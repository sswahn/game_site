import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header'
import Router from './Router'

/**
 * TODO: 
 * 
 * Fix Modal
 * 
 * 
 * Profile page:
 * design profile page, including bio etc. and feed.
 * 
 * Cart modal:
 * create cart modal
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

import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header'
import Router from './Router'

/**
 * TODO: 
 * 
 * checkbox is buggy
 * 
 * Profile page:
 * design profile page, including bio etc. and feed.
 * 
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

import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Router from './Router'

/**
 * TODO: 
 * 
 * Profile page:
 * css profile page
 * 
 * Uploads page:
 * create uploads page.
 * 
 * Display page:
 * make page to display uploaded game
 * go to itchio and do the log in upload flow
 * 
 * Cart Modal:
 * cart modal design
 * 
 * Checkout page 
 * 
 */

export default function App() {
  return (
    <Provider>
      <Modal />
      <Header />
      <Main />
      <Footer />
      <Router />
    </Provider>
  )
}

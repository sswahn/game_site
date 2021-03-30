import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header'
import Footer from './components/Footer'
import Router from './Router'

/**
 * TODO: 
 * 
 * style header
 * 
 * style toolTip for each product item
 * 
 * style cart modal design
 *
 * style profile page
 * 
 * create uploads page.
 * 
 * Create checkout page 
 * 
 */

export default function App() {
  return (
    <Provider>
      <Modal />
      <Header />
      <Router />
      <Footer />
    </Provider>
  )
}

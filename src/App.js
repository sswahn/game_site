import Provider from './Provider'
import Modal from './components/Modal'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Router from './Router'

/**
 * TODO: 
 * 
 * (consider subnav below hero instead of massive dropdown
 * or move dropdown to subnav or something)
 * 
 * style toolTip for product item
 * last tooltip in row needs to display to the left
 * add more content to tooltip ex. user review info / genre info
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

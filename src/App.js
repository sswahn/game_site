import Provider from './Provider'
import Header from './components/Header'
import Router from './Router'

export default function App() {
  return (
    <Provider>
      <Header />
      <Router />
    </Provider>
  )
}

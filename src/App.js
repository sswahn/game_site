import Provider from './Provider'
import UserNav from './components/UserNav'
import Sidebar from './components/Sidebar'
import Router from './Router'

export default function App() {
  return (
    <Provider>
      <UserNav />
      <Sidebar />
      <Router />
    </Provider>
  )
}

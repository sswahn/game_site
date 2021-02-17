import Provider from './Provider'
import UserNav from './components/UserNav'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'

export default function App() {
  return (
    <Provider>
      <UserNav />
      <Sidebar />
      <Landing />
    </Provider>
  )
}

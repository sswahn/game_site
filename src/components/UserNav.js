import { useContext } from 'react'
import { Context } from '../Provider'
import { config } from '../config'

export default function UserNav() {
  const context = useContext(Context)

  const profile = () => 
    <div className="profile">
      <a href={config.url.profile}>User Profile</a>
    </div>

  const login = () => 
    <div className="login">
      <a href="#">Login</a>
    </div>
 
  const render = () => {
    if (context.authenticated) {
      return profile()
    } 
    return login()
  }

  return (
    <div className="usernav">
      {render()}
    </div>
  )
}

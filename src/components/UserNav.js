import { useContext } from 'react'
import { Context } from '../Provider'
import { config } from '../config'

export default function UserNav() {
  const context = useContext(Context)

  const render = () => 
    <div className="profile">
      {context.authenticated 
        ? <a href={config.url.profile}>User Profile</a>
        : <a href={config.url.login}>Login</a>
      }
    </div>

  return (
    <div className="usernav">
      {render()}
    </div>
  )
}


export default function UserNav() {

  const profile = () => {
    return (
      <div>
        <a href={}>User Profile</a>
      </div>
    )
  }

  const loginForm = () => {
    return (
      <form>
        <input type="search" />
        <button type="submit"></button>
      </form>
    )
  }

  return (
    <div className="usernav">
      {context.loggedin ? profile() : loginForm()}
    </div>
  )
}
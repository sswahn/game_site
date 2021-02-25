
export default function Register() {

  return (
    <form className="login-form">
      <h2>Register New Account</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm password" required />
      <button type="submit">Register</button>
    </form>
  )
}
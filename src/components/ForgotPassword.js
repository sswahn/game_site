
export default function ForgotPassword() {
  return (
    <form className="login-form">
      <h2>Account</h2>
      <input type="email" placeholder="Email" required />
      <button type="submit">Reset Password</button>
    </form>
  )
}
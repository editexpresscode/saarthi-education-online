function ParentLogin() {
  return (
    <div className="login-page">

      <h1>Parent Login</h1>

      <p>Login to monitor your child's learning.</p>

      <form>
        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Login
        </button>
      </form>

    </div>
  )
}

export default ParentLogin
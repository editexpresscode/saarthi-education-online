function Login() {
  return (
    <div>
      <h1>Login</h1>

      <p>Login to your Saarthi Education Online account.</p>

      <input
        type="email"
        placeholder="Email"
      />

      <br />

      <input
        type="password"
        placeholder="Password"
      />

      <br />

      <button>Login</button>

      <p>
        Don't have an account?
        <a href="/signup"> Sign Up</a>
      </p>
    </div>
  )
}

export default Login
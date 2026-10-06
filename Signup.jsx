function Signup() {
  return (
    <div>
      <h1>Create your account</h1>

      <p>Join Saarthi Education Online.</p>

      <input
        type="text"
        placeholder="Full Name"
      />

      <br />

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

      <button>Create Account</button>

      <p>
        Already have an account?
        <a href="/login"> Login</a>
      </p>
    </div>
  )
}

export default Signup
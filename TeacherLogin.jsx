function TeacherLogin() {
  return (
    <div className="login-page">

      <h1>Teacher Login</h1>

      <p>Login to access your Saarthi teacher portal.</p>

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

export default TeacherLogin
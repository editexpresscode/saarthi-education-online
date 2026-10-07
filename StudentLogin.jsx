import { useNavigate } from 'react-router-dom'

function StudentLogin() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/student-dashboard')
  }

  return (
    <div className="login-page">

      <h1>Student Login</h1>

      <p>Login to access your Saarthi learning portal.</p>

      <form onSubmit={handleLogin}>

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

      <p>
        Don't have an account?
        <a href="/signup"> Sign Up</a>
      </p>

    </div>
  )
}

export default StudentLogin
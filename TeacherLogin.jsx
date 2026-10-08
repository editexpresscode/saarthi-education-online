import { useNavigate } from 'react-router-dom'

function TeacherLogin() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/teacher-dashboard')
  }

  return (
    <div className="login-page">

      <h1>Teacher Login</h1>

      <p>
        Login to access your Saarthi teacher portal.
      </p>

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

    </div>
  )
}

export default TeacherLogin
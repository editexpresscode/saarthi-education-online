import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login-page">

      <h1>Login to Saarthi</h1>

      <p>Select your role to continue</p>

      <div className="role-login-options">

        <Link to="/login/student">
          👨‍🎓
          <br />
          Student Login
        </Link>

        <Link to="/login/teacher">
          👨‍🏫
          <br />
          Teacher Login
        </Link>

        <Link to="/login/parent">
          👨‍👩‍👦
          <br />
          Parent Login
        </Link>

      </div>

    </div>
  )
}

export default Login

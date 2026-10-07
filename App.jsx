import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'

import StudentLogin from './StudentLogin'
import TeacherLogin from './TeacherLogin'
import ParentLogin from './ParentLogin'

import StudentDashboard from './StudentDashboard'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/login/student"
          element={<StudentLogin />}
        />

        <Route
          path="/login/teacher"
          element={<TeacherLogin />}
        />

        <Route
          path="/login/parent"
          element={<ParentLogin />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App

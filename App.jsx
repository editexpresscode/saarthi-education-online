import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import StudentLogin from './pages/StudentLogin'
import TeacherLogin from './pages/TeacherLogin'
import ParentLogin from './pages/ParentLogin'

import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import InstantHelp from './pages/InstantHelp'
import TeacherDoubts from './pages/TeacherDoubts'

import { InstantHelpProvider } from './InstantHelpContext'

import './App.css'

function App() {
  return (
    <InstantHelpProvider>
      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* STUDENT LOGIN */}
          <Route
            path="/login/student"
            element={<StudentLogin />}
          />

          {/* TEACHER LOGIN */}
          <Route
            path="/login/teacher"
            element={<TeacherLogin />}
          />

          {/* PARENT LOGIN */}
          <Route
            path="/login/parent"
            element={<ParentLogin />}
          />

          {/* SIGNUP */}
          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* STUDENT DASHBOARD */}
          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />

          {/* TEACHER DASHBOARD */}
          <Route
            path="/teacher-dashboard"
            element={<TeacherDashboard />}
          />

          {/* STUDENT INSTANT HELP */}
          <Route
            path="/instant-help"
            element={<InstantHelp />}
          />

          {/* TEACHER INSTANT DOUBTS */}
          <Route
            path="/teacher-doubts"
            element={<TeacherDoubts />}
          />

        </Routes>
      </BrowserRouter>
    </InstantHelpProvider>
  )
}

export default App
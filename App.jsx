import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Signup from './Signup'

import StudentLogin from './StudentLogin'
import TeacherLogin from './TeacherLogin'
import ParentLogin from './ParentLogin'

import StudentDashboard from './StudentDashboard'
import TeacherDashboard from './TeacherDashboard'
import InstantHelp from './InstantHelp'
import TeacherDoubts from './TeacherDoubts'

import { InstantHelpProvider } from './InstantHelpContext'

import './App.css'

function App() {
  return (
    <InstantHelpProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/login/student" element={<StudentLogin />} />
          <Route path="/login/teacher" element={<TeacherLogin />} />
          <Route path="/login/parent" element={<ParentLogin />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="/teacher-dashboard"
            element={<TeacherDashboard />}
          />

          <Route
            path="/instant-help"
            element={<InstantHelp />}
          />

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

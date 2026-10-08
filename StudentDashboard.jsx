import { useState } from 'react'
import { Link } from 'react-router-dom'

function StudentDashboard() {
  const [selectedClass, setSelectedClass] = useState('10')

  return (
    <div className="student-app">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="student-sidebar">

        <div className="sidebar-header">
          <div className="sidebar-logo">
            SAARTHI
          </div>

          <button className="close-menu">
            ×
          </button>
        </div>


        <div className="sidebar-user">

          <div className="user-avatar">
            👨‍🎓
          </div>

          <div>
            <h3>Student</h3>
            <p>Class {selectedClass}</p>
          </div>

        </div>


        <nav className="sidebar-nav">

          <Link
            to="/student-dashboard"
            className="active"
          >
            🏠
            <span>Dashboard</span>
          </Link>


          <Link to="/instant-help">
            🆘
            <span>Instant Help</span>
          </Link>


          <Link to="/live-classes">
            📚
            <span>Live Classes</span>
          </Link>


          <Link to="/tests">
            📝
            <span>Tests</span>
          </Link>


          <Link to="/progress">
            📊
            <span>My Progress</span>
          </Link>


          <Link to="/doubt-history">
            💬
            <span>Doubt History</span>
          </Link>


          <Link to="/teacher-feedback">
            ⭐
            <span>Teacher Feedback</span>
          </Link>


          <Link to="/notifications">
            🔔
            <span>Notifications</span>
          </Link>

        </nav>


        <div className="sidebar-bottom">

          <Link to="/profile">
            👤
            <span>My Profile</span>
          </Link>


          <Link to="/settings">
            ⚙️
            <span>Settings</span>
          </Link>


          <Link to="/">
            🚪
            <span>Logout</span>
          </Link>

        </div>

      </aside>


      {/* =========================
          MAIN
      ========================= */}

      <main className="student-main">


        {/* TOPBAR */}

        <header className="student-topbar">

          <div className="topbar-right">

            <button className="notification-button">
              🔔
            </button>


            <div className="topbar-profile">

              <div className="small-avatar">
                👨‍🎓
              </div>

              <div>
                <strong>Student</strong>
                <span>Class {selectedClass}</span>
              </div>

            </div>

          </div>

        </header>


        {/* =========================
            DASHBOARD CONTENT
        ========================= */}

        <div className="dashboard-content">


          {/* WELCOME */}

          <section className="welcome-section">

            <p className="welcome-label">
              STUDENT DASHBOARD
            </p>

            <h1>
              Good evening, Student 👋
            </h1>

            <p>
              What would you like to learn today?
            </p>


            {/* CLASS SELECTOR */}

            <div className="class-selector">

              <span>
                Your Class
              </span>

              <div className="class-select-wrapper">

                <select
                  className="class-select-button"
                  value={selectedClass}
                  onChange={(e) =>
                    setSelectedClass(e.target.value)
                  }
                >
                  <option value="8">
                    Class 8
                  </option>

                  <option value="9">
                    Class 9
                  </option>

                  <option value="10">
                    Class 10
                  </option>

                  <option value="11">
                    Class 11
                  </option>

                  <option value="12">
                    Class 12
                  </option>

                </select>

              </div>

            </div>

          </section>


          {/* =========================
              INSTANT HELP
          ========================= */}

          <section className="instant-help-card">

            <div className="instant-help-content">

              <span className="online-label">
                🟢 TEACHERS AVAILABLE NOW
              </span>

              <h2>
                Got a doubt?
              </h2>

              <p>
                Connect with an available teacher and get
                your doubt solved instantly.
              </p>

              <Link
                to="/instant-help"
                className="instant-help-button"
              >
                🆘 Get Instant Help
              </Link>

            </div>


            <div className="help-illustration">
              🎓
            </div>

          </section>


          {/* =========================
              LIVE CLASSES
          ========================= */}

          <section className="dashboard-section">

            <div className="section-header">

              <div>

                <p className="section-label">
                  LEARN LIVE
                </p>

                <h2>
                  Live Classes
                </h2>

                <p>
                  Classes for Class {selectedClass}
                </p>

              </div>


              <Link to="/live-classes">
                View all →
              </Link>

            </div>


            <div className="class-grid">


              {/* FREE CLASS */}

              <div className="class-card">

                <div className="class-card-top">

                  <span className="free-tag">
                    FREE
                  </span>

                  <span className="live-dot">
                    ● LIVE
                  </span>

                </div>


                <h3>
                  Mathematics
                </h3>

                <p className="class-teacher">
                  👨‍🏫 Rahul Sharma
                </p>

                <p className="class-description">
                  Algebra & Quadratic Equations
                </p>


                <div className="class-details">

                  <span>
                    🕕 Today • 6:00 PM
                  </span>

                  <span>
                    👥 128 students
                  </span>

                </div>


                <Link
                  to="/live-classes"
                  className="class-action"
                >
                  Join Class →
                </Link>

              </div>


              {/* PREMIUM CLASS */}

              <div className="class-card">

                <div className="class-card-top">

                  <span className="paid-tag">
                    PREMIUM
                  </span>

                  <span className="class-price">
                    ₹199
                  </span>

                </div>


                <h3>
                  Science
                </h3>

                <p className="class-teacher">
                  👨‍🏫 Priya Verma
                </p>

                <p className="class-description">
                  Complete Chapter Revision
                </p>


                <div className="class-details">

                  <span>
                    🕕 Tomorrow • 5:30 PM
                  </span>

                  <span>
                    👥 86 students
                  </span>

                </div>


                <Link
                  to="/live-classes"
                  className="class-action"
                >
                  View Class →
                </Link>

              </div>

            </div>

          </section>


          {/* =========================
              UPCOMING CLASS
          ========================= */}

          <section className="dashboard-section">

            <div className="section-header">

              <div>

                <p className="section-label">
                  UPCOMING
                </p>

                <h2>
                  Next Class
                </h2>

              </div>

            </div>


            <div className="upcoming-card">

              <div className="upcoming-date">

                <strong>
                  09
                </strong>

                <span>
                  OCT
                </span>

              </div>


              <div className="upcoming-info">

                <h3>
                  Mathematics — Trigonometry
                </h3>

                <p>
                  Rahul Sharma • Class {selectedClass}
                </p>

                <span>
                  Tomorrow • 6:00 PM
                </span>

              </div>


              <Link to="/live-classes">
                View →
              </Link>

            </div>

          </section>


          {/* =========================
              QUICK ACCESS
          ========================= */}

          <section className="dashboard-section">

            <div className="section-header">

              <div>

                <p className="section-label">
                  QUICK ACCESS
                </p>

                <h2>
                  Continue Learning
                </h2>

              </div>

            </div>


            <div className="quick-grid">


              <Link
                to="/tests"
                className="quick-card"
              >

                <span>
                  📝
                </span>

                <div>

                  <h3>
                    Online Tests
                  </h3>

                  <p>
                    Practice and improve your score
                  </p>

                </div>

              </Link>


              <Link
                to="/progress"
                className="quick-card"
              >

                <span>
                  📊
                </span>

                <div>

                  <h3>
                    My Progress
                  </h3>

                  <p>
                    Check your learning performance
                  </p>

                </div>

              </Link>


              <Link
                to="/doubt-history"
                className="quick-card"
              >

                <span>
                  💬
                </span>

                <div>

                  <h3>
                    Doubt History
                  </h3>

                  <p>
                    View previous doubt sessions
                  </p>

                </div>

              </Link>


              <Link
                to="/teacher-feedback"
                className="quick-card"
              >

                <span>
                  ⭐
                </span>

                <div>

                  <h3>
                    Teacher Feedback
                  </h3>

                  <p>
                    Rate your learning experience
                  </p>

                </div>

              </Link>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default StudentDashboard
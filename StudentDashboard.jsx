import { useState } from 'react'
import { Link } from 'react-router-dom'

function StudentDashboard() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState('Class 10')
  const [classMenuOpen, setClassMenuOpen] = useState(false)

  const classes = [
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ]

  return (
    <div className="student-app">

      {/* MOBILE SIDEBAR OVERLAY */}
      {menuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* SIDEBAR */}
      <aside className={`student-sidebar ${menuOpen ? 'open' : ''}`}>

        <div className="sidebar-header">
          <div className="sidebar-logo">
            SAARTHI
          </div>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        {/* STUDENT PROFILE */}
        <div className="sidebar-user">

          <div className="user-avatar">
            👨‍🎓
          </div>

          <div>
            <h3>Student</h3>
            <p>{selectedClass}</p>
          </div>

        </div>

        {/* SIDEBAR MENU */}
        <nav className="sidebar-nav">

          <Link to="/student-dashboard">
            🏠
            <span>Dashboard</span>
          </Link>

          <Link to="/find-teacher">
            🆘
            <span>Instant Help</span>
          </Link>

          <Link to="/classes">
            📡
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

          <Link to="/feedback">
            ⭐
            <span>Teacher Feedback</span>
          </Link>

          <Link to="/notifications">
            🔔
            <span>Notifications</span>
          </Link>

        </nav>

        {/* SIDEBAR BOTTOM */}
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


      {/* MAIN APP */}
      <main className="student-main">

        {/* TOP BAR */}
        <header className="student-topbar">

          <button
            className="menu-button"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

          <div className="mobile-logo">
            SAARTHI
          </div>

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
                <span>{selectedClass}</span>
              </div>

            </div>

          </div>

        </header>


        {/* DASHBOARD CONTENT */}
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

              <span>Your Class</span>

              <div className="class-select-wrapper">

                <button
                  className="class-select-button"
                  onClick={() =>
                    setClassMenuOpen(!classMenuOpen)
                  }
                >
                  {selectedClass}
                  <span>▾</span>
                </button>


                {classMenuOpen && (
                  <div className="class-dropdown">

                    {classes.map((item) => (

                      <button
                        key={item}
                        className={
                          selectedClass === item
                            ? 'selected-class'
                            : ''
                        }
                        onClick={() => {
                          setSelectedClass(item)
                          setClassMenuOpen(false)
                        }}
                      >
                        {item}

                        {selectedClass === item && (
                          <span>✓</span>
                        )}

                      </button>

                    ))}

                  </div>
                )}

              </div>

            </div>

          </section>


          {/* INSTANT HELP */}
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
                to="/find-teacher"
                className="instant-help-button"
              >
                🆘 Get Instant Help
              </Link>

            </div>

            <div className="help-illustration">
              🎓
            </div>

          </section>


          {/* LIVE CLASSES */}
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
                  Classes for {selectedClass}
                </p>
              </div>

              <Link to="/classes">
                View all →
              </Link>

            </div>


            <div className="class-grid">

              {/* FREE CLASS */}
              <article className="class-card">

                <div className="class-card-top">

                  <span className="free-tag">
                    FREE
                  </span>

                  <span className="live-dot">
                    ● LIVE
                  </span>

                </div>

                <h3>
                  Mathematics – {selectedClass}
                </h3>

                <p className="class-teacher">
                  👨‍🏫 Mr. Sharma
                </p>

                <p className="class-description">
                  Quadratic Equations & Important Questions
                </p>

                <div className="class-details">

                  <span>
                    🕐 6:00 PM
                  </span>

                  <span>
                    👥 128 students
                  </span>

                </div>

                <Link
                  to="/live-class"
                  className="class-action"
                >
                  Join Free Class
                </Link>

              </article>


              {/* PAID CLASS */}
              <article className="class-card">

                <div className="class-card-top">

                  <span className="paid-tag">
                    PAID
                  </span>

                  <strong className="class-price">
                    ₹99
                  </strong>

                </div>

                <h3>
                  Physics – {selectedClass}
                </h3>

                <p className="class-teacher">
                  👨‍🏫 Dr. Rahul
                </p>

                <p className="class-description">
                  Current Electricity – Complete Concept
                </p>

                <div className="class-details">

                  <span>
                    🕐 7:30 PM
                  </span>

                  <span>
                    ⭐ 4.8
                  </span>

                </div>

                <Link
                  to="/class-details"
                  className="class-action"
                >
                  Enroll Now
                </Link>

              </article>

            </div>

          </section>


          {/* UPCOMING CLASSES */}
          <section className="dashboard-section">

            <div className="section-header">

              <div>
                <p className="section-label">
                  YOUR SCHEDULE
                </p>

                <h2>
                  Upcoming Classes
                </h2>
              </div>

            </div>


            <div className="upcoming-card">

              <div className="upcoming-date">
                <strong>08</strong>
                <span>OCT</span>
              </div>

              <div className="upcoming-info">

                <h3>
                  Physics – Current Electricity
                </h3>

                <p>
                  Dr. Rahul • {selectedClass}
                </p>

                <span>
                  🕐 Tomorrow • 7:30 PM
                </span>

              </div>

              <button>
                View Details
              </button>

            </div>

          </section>


          {/* QUICK ACCESS */}
          <section className="dashboard-section">

            <div className="section-header">

              <div>
                <p className="section-label">
                  YOUR LEARNING
                </p>

                <h2>
                  Quick Access
                </h2>
              </div>

            </div>


            <div className="quick-grid">

              <Link
                to="/tests"
                className="quick-card"
              >
                <span>📝</span>

                <div>
                  <h3>Tests</h3>
                  <p>
                    Take tests & view results
                  </p>
                </div>
              </Link>


              <Link
                to="/progress"
                className="quick-card"
              >
                <span>📊</span>

                <div>
                  <h3>My Progress</h3>
                  <p>
                    Track your performance
                  </p>
                </div>
              </Link>


              <Link
                to="/doubt-history"
                className="quick-card"
              >
                <span>💬</span>

                <div>
                  <h3>Doubt History</h3>
                  <p>
                    Previous teacher sessions
                  </p>
                </div>
              </Link>


              <Link
                to="/feedback"
                className="quick-card"
              >
                <span>⭐</span>

                <div>
                  <h3>Teacher Feedback</h3>
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
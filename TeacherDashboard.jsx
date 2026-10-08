import { Link } from 'react-router-dom'
import { useInstantHelp } from '../InstantHelpContext'

function TeacherDashboard() {
  const {
    request,
    acceptRequest,
    declineRequest,
    endSession
  } = useInstantHelp()

  const isPending = request?.status === 'pending'
  const isAccepted = request?.status === 'accepted'
  const isDeclined = request?.status === 'declined'

  return (
    <div className="teacher-app">

      {/* SIDEBAR */}

      <aside className="teacher-sidebar">

        <div className="teacher-logo">
          SAARTHI
        </div>

        <div className="teacher-profile">

          <div className="teacher-avatar">
            👨‍🏫
          </div>

          <div>
            <h3>Teacher</h3>
            <p>Mathematics</p>
          </div>

        </div>

        <nav className="teacher-nav">

          <Link
            to="/teacher-dashboard"
            className="active"
          >
            🏠 <span>Dashboard</span>
          </Link>

          <Link to="/teacher-doubts">
            🆘 <span>Instant Doubts</span>
          </Link>

          <Link to="/teacher-classes">
            📚 <span>My Classes</span>
          </Link>

          <Link to="/teacher-students">
            👥 <span>My Students</span>
          </Link>

          <Link to="/teacher-schedule">
            📅 <span>Schedule</span>
          </Link>

          <Link to="/teacher-earnings">
            💰 <span>Earnings</span>
          </Link>

          <Link to="/teacher-ratings">
            ⭐ <span>Ratings</span>
          </Link>

          <Link to="/teacher-notifications">
            🔔 <span>Notifications</span>
          </Link>

        </nav>

        <div className="teacher-bottom">

          <Link to="/teacher-profile">
            👤 <span>My Profile</span>
          </Link>

          <Link to="/teacher-settings">
            ⚙️ <span>Settings</span>
          </Link>

          <Link to="/">
            🚪 <span>Logout</span>
          </Link>

        </div>

      </aside>


      {/* MAIN */}

      <main className="teacher-main">

        <header className="teacher-topbar">

          <div>

            <p>
              TEACHER DASHBOARD
            </p>

            <h1>
              Good evening, Teacher 👋
            </h1>

          </div>

          <div className="teacher-top-profile">

            <span>
              {isAccepted ? '🔴' : '🟢'}
            </span>

            <strong>
              {isAccepted ? 'Busy' : 'Available'}
            </strong>

          </div>

        </header>


        <div className="teacher-content">

          {/* STATUS */}

          <section className="teacher-status-card">

            <div>

              <span className="available-label">

                {isAccepted
                  ? '🔴 YOU ARE BUSY'
                  : '🟢 YOU ARE AVAILABLE'}

              </span>

              <h2>

                {isAccepted
                  ? 'You are helping a student'
                  : 'Ready to help students?'}

              </h2>

              <p>

                {isAccepted
                  ? 'You cannot receive another doubt request until this session ends.'
                  : 'Students can request your help when you are available.'}

              </p>

            </div>

            <button>
              {isAccepted ? 'Busy' : 'Available'}
            </button>

          </section>


          {/* STATS */}

          <section className="teacher-stats">

            <div className="teacher-stat">

              <span>🆘</span>

              <div>

                <strong>
                  {isPending ? '1' : '0'}
                </strong>

                <p>
                  Pending Doubts
                </p>

              </div>

            </div>


            <div className="teacher-stat">

              <span>👥</span>

              <div>

                <strong>
                  128
                </strong>

                <p>
                  Students
                </p>

              </div>

            </div>


            <div className="teacher-stat">

              <span>⭐</span>

              <div>

                <strong>
                  4.8
                </strong>

                <p>
                  Rating
                </p>

              </div>

            </div>


            <div className="teacher-stat">

              <span>💰</span>

              <div>

                <strong>
                  ₹8,450
                </strong>

                <p>
                  Total Earnings
                </p>

              </div>

            </div>

          </section>


          {/* INSTANT DOUBT REQUEST */}

          <section className="teacher-section">

            <div className="teacher-section-header">

              <div>

                <p>
                  STUDENT REQUESTS
                </p>

                <h2>
                  Instant Doubt Requests
                </h2>

              </div>

              <Link to="/teacher-doubts">
                View all →
              </Link>

            </div>


            {/* NO REQUEST */}

            {!request && (

              <div className="doubt-request-card">

                <div className="student-request-avatar">
                  ✓
                </div>

                <div className="doubt-request-info">

                  <h3>
                    No pending requests
                  </h3>

                  <span>
                    New student doubt requests will
                    appear here.
                  </span>

                </div>

              </div>

            )}


            {/* PENDING */}

            {isPending && (

              <div className="doubt-request-card">

                <div className="student-request-avatar">
                  👨‍🎓
                </div>

                <div className="doubt-request-info">

                  <h3>
                    Class {request.studentClass}
                    {' • '}
                    {request.subject}
                  </h3>

                  <p>
                    {request.topic || 'General Doubt'}
                  </p>

                  <span>
                    Student needs help with this topic.
                  </span>

                </div>

                <div className="request-actions">

                  <button
                    className="accept-btn"
                    onClick={acceptRequest}
                  >
                    Accept
                  </button>

                  <button
                    className="decline-btn"
                    onClick={declineRequest}
                  >
                    Decline
                  </button>

                </div>

              </div>

            )}


            {/* ACCEPTED / ACTIVE SESSION */}

            {isAccepted && (

              <div className="doubt-request-card">

                <div className="student-request-avatar">
                  👨‍🎓
                </div>

                <div className="doubt-request-info">

                  <h3>
                    Student Connected 🟢
                  </h3>

                  <p>
                    Class {request.studentClass}
                    {' • '}
                    {request.subject}
                  </p>

                  <span>
                    {request.topic || 'General Doubt'}
                    {' • '}
                    Session is active.
                  </span>

                </div>

                <div className="request-actions">

                  <span
                    style={{
                      color: '#d92d20',
                      fontWeight: '700',
                      marginRight: '10px'
                    }}
                  >
                    🔴 BUSY
                  </span>

                  <button
                    className="decline-btn"
                    onClick={endSession}
                  >
                    End Session
                  </button>

                </div>

              </div>

            )}


            {/* DECLINED */}

            {isDeclined && (

              <div className="doubt-request-card">

                <div className="student-request-avatar">
                  ❌
                </div>

                <div className="doubt-request-info">

                  <h3>
                    Request Declined
                  </h3>

                  <span>
                    This request has been declined.
                    The student can choose another teacher.
                  </span>

                </div>

              </div>

            )}

          </section>


          {/* TODAY'S CLASSES */}

          <section className="teacher-section">

            <div className="teacher-section-header">

              <div>

                <p>
                  YOUR SCHEDULE
                </p>

                <h2>
                  Today's Classes
                </h2>

              </div>

              <Link to="/teacher-schedule">
                View schedule →
              </Link>

            </div>


            <div className="teacher-class-grid">

              <div className="teacher-class-card">

                <span className="class-time">
                  6:00 PM
                </span>

                <h3>
                  Mathematics
                </h3>

                <p>
                  Class 10 • Quadratic Equations
                </p>

                <span>
                  👥 128 students
                </span>

              </div>


              <div className="teacher-class-card">

                <span className="class-time">
                  7:30 PM
                </span>

                <h3>
                  Mathematics
                </h3>

                <p>
                  Class 12 • Calculus
                </p>

                <span>
                  👥 86 students
                </span>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  )
}

export default TeacherDashboard
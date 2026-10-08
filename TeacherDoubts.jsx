import { Link } from 'react-router-dom'
import { useInstantHelp } from './InstantHelpContext'

function TeacherDoubts() {
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
    <div className="teacher-doubts-page">

      {/* HEADER */}

      <header className="teacher-doubts-header">

        <div>

          <Link
            to="/teacher-dashboard"
            className="teacher-back-link"
          >
            ← Dashboard
          </Link>

          <p className="teacher-page-label">
            SAARTHI TEACHER PORTAL
          </p>

          <h1>
            Instant Doubt Requests
          </h1>

          <p>
            Help students who need assistance right now.
          </p>

        </div>


        {/* AVAILABILITY */}

        <div className="teacher-availability">

          <span>
            {isAccepted ? '🔴' : '🟢'}
          </span>

          <div>

            <strong
              style={{
                color: isAccepted
                  ? '#d92d20'
                  : '#067647'
              }}
            >
              {isAccepted
                ? 'Busy'
                : 'Available'}
            </strong>

            <small>
              {isAccepted
                ? 'In a doubt session'
                : 'Accepting requests'}
            </small>

          </div>

        </div>

      </header>


      {/* CONTENT */}

      <main className="teacher-doubts-content">


        {/* NO REQUEST */}

        {!request && (

          <div className="request-result-card">

            <div className="result-icon">
              ✓
            </div>

            <p className="teacher-page-label">
              ALL CLEAR
            </p>

            <h2>
              No pending requests
            </h2>

            <p>
              New student doubt requests will
              appear here.
            </p>

          </div>

        )}


        {/* PENDING */}

        {isPending && (

          <div className="incoming-request-card">

            <div className="request-top">

              <span className="new-request-badge">
                🆘 NEW REQUEST
              </span>

              <span className="request-time">
                Just now
              </span>

            </div>


            <div className="student-request-details">

              <div className="student-request-avatar">
                👨‍🎓
              </div>

              <div>

                <h2>
                  Student needs your help
                </h2>

                <p>
                  Class {request.studentClass}
                  {' • '}
                  {request.subject}
                </p>

                <strong>
                  {request.topic || 'General Doubt'}
                </strong>

                <span>
                  Student needs help with this topic.
                </span>

              </div>

            </div>


            <div className="request-session-info">

              <div>

                <span>
                  💰 Session
                </span>

                <strong>
                  ₹{request.teacher?.price || 99}
                </strong>

              </div>

              <div>

                <span>
                  ⏱️ Expected duration
                </span>

                <strong>
                  15–30 min
                </strong>

              </div>

              <div>

                <span>
                  🎓 Class
                </span>

                <strong>
                  {request.studentClass}
                </strong>

              </div>

            </div>


            <div className="request-actions-large">

              <button
                className="accept-request-btn"
                onClick={acceptRequest}
              >
                ✓ Accept Request
              </button>

              <button
                className="decline-request-btn"
                onClick={declineRequest}
              >
                ✕ Decline
              </button>

            </div>

          </div>

        )}


        {/* ACTIVE SESSION */}

        {isAccepted && (

          <div className="request-result-card accepted">

            <div className="result-icon">
              🟢
            </div>

            <p className="teacher-page-label">
              SESSION ACTIVE
            </p>

            <h2>
              You are now connected!
            </h2>

            <p>
              You are currently helping the student.
              You are marked as busy until the session ends.
            </p>


            <div className="connected-student-card">

              <div className="student-request-avatar">
                👨‍🎓
              </div>

              <div>

                <strong>
                  Class {request.studentClass} Student
                </strong>

                <span>
                  {request.subject}
                  {' • '}
                  {request.topic || 'General Doubt'}
                </span>

              </div>

            </div>


            <button
              className="decline-request-btn"
              onClick={endSession}
              style={{
                marginTop: '15px',
                minWidth: '180px'
              }}
            >
              End Session
            </button>

          </div>

        )}


        {/* DECLINED */}

        {isDeclined && (

          <div className="request-result-card declined">

            <div className="result-icon">
              ❌
            </div>

            <p className="teacher-page-label">
              REQUEST DECLINED
            </p>

            <h2>
              Request declined
            </h2>

            <p>
              The student can now request another
              available teacher.
            </p>

          </div>

        )}

      </main>

    </div>
  )
}

export default TeacherDoubts

import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useInstantHelp } from './InstantHelpContext'

function InstantHelp() {
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')

  const {
    request,
    createRequest,
    cancelRequest,
    clearRequest
  } = useInstantHelp()

  const subjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'English',
    'Computer Science'
  ]

  const topics = {
    Mathematics: [
      'Algebra',
      'Quadratic Equations',
      'Trigonometry',
      'Geometry',
      'Calculus'
    ],

    Physics: [
      'Motion',
      'Force and Laws of Motion',
      'Electricity',
      'Magnetism',
      'Optics'
    ],

    Chemistry: [
      'Atoms and Molecules',
      'Chemical Reactions',
      'Organic Chemistry',
      'Thermodynamics'
    ],

    Biology: [
      'Cell Biology',
      'Human Body',
      'Genetics',
      'Ecology'
    ],

    English: [
      'Grammar',
      'Writing',
      'Literature',
      'Reading Comprehension'
    ],

    'Computer Science': [
      'Programming',
      'DBMS',
      'Computer Networks',
      'Data Structures'
    ]
  }

  const teachers = [
    {
      id: 1,
      name: 'Rahul Sharma',
      subject: 'Mathematics',
      classes: ['8', '9', '10'],
      rating: '4.9',
      students: 342,
      price: 99,
      status: 'available'
    },

    {
      id: 2,
      name: 'Priya Verma',
      subject: 'Mathematics',
      classes: ['9', '10', '11', '12'],
      rating: '4.8',
      students: 286,
      price: 129,
      status: 'available'
    },

    {
      id: 3,
      name: 'Amit Kumar',
      subject: 'Physics',
      classes: ['11', '12'],
      rating: '4.7',
      students: 198,
      price: 149,
      status: 'busy'
    },

    {
      id: 4,
      name: 'Neha Gupta',
      subject: 'Chemistry',
      classes: ['11', '12'],
      rating: '4.9',
      students: 421,
      price: 149,
      status: 'available'
    },

    {
      id: 5,
      name: 'Vikas Singh',
      subject: 'Computer Science',
      classes: ['9', '10', '11', '12'],
      rating: '4.8',
      students: 312,
      price: 119,
      status: 'available'
    }
  ]

  const matchingTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const classMatch =
        !selectedClass ||
        teacher.classes.includes(selectedClass)

      const subjectMatch =
        !selectedSubject ||
        teacher.subject === selectedSubject

      return classMatch && subjectMatch
    })
  }, [selectedClass, selectedSubject])

  const availableTeachers = matchingTeachers.filter(
    (teacher) => teacher.status === 'available'
  )

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject)
    setSelectedTopic('')
  }

  const handleRequest = (teacher) => {
    createRequest({
      studentClass: selectedClass,
      subject: selectedSubject,
      topic: selectedTopic,
      teacher
    })
  }

  const hasActiveRequest =
    request &&
    (
      request.status === 'pending' ||
      request.status === 'accepted'
    )

  return (
    <div className="instant-help-page">

      {/* HEADER */}

      <header className="instant-help-header">

        <div>

          <Link
            to="/student-dashboard"
            className="back-link"
          >
            ← Dashboard
          </Link>

          <p className="instant-label">
            SAARTHI INSTANT HELP
          </p>

          <h1>
            Get help from a teacher instantly
          </h1>

          <p>
            Select your class and subject and find a
            teacher who is available right now.
          </p>

        </div>

        <div className="teacher-count-box">

          <span>🟢</span>

          <div>

            <strong>
              {availableTeachers.length}
            </strong>

            <small>
              Teachers Available
            </small>

          </div>

        </div>

      </header>


      {/* SELECTION */}

      <section className="help-selection">

        <div className="selection-title">

          <span>1</span>

          <div>

            <h2>
              What do you need help with?
            </h2>

            <p>
              Choose your class, subject and topic.
            </p>

          </div>

        </div>


        <div className="selection-grid">

          {/* CLASS */}

          <div className="selection-field">

            <label>
              Class
            </label>

            <select
              value={selectedClass}
              onChange={(e) =>
                setSelectedClass(e.target.value)
              }
            >

              <option value="">
                Select Class
              </option>

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


          {/* SUBJECT */}

          <div className="selection-field">

            <label>
              Subject
            </label>

            <select
              value={selectedSubject}
              onChange={(e) =>
                handleSubjectChange(e.target.value)
              }
            >

              <option value="">
                Select Subject
              </option>

              {subjects.map((subject) => (
                <option
                  key={subject}
                  value={subject}
                >
                  {subject}
                </option>
              ))}

            </select>

          </div>


          {/* TOPIC */}

          <div className="selection-field">

            <label>
              Topic <span>(Optional)</span>
            </label>

            <select
              value={selectedTopic}
              disabled={!selectedSubject}
              onChange={(e) =>
                setSelectedTopic(e.target.value)
              }
            >

              <option value="">
                {selectedSubject
                  ? 'Select Topic'
                  : 'Select subject first'}
              </option>

              {selectedSubject &&
                topics[selectedSubject]?.map((topic) => (
                  <option
                    key={topic}
                    value={topic}
                  >
                    {topic}
                  </option>
                ))}

            </select>

          </div>

        </div>

      </section>


      {/* REQUEST STATUS */}

      {request?.status === 'pending' && (

        <section className="request-status-card">

          <div className="request-status-icon">
            ⏳
          </div>

          <div>

            <p className="instant-label">
              REQUEST SENT
            </p>

            <h2>
              Waiting for {request.teacher.name}
            </h2>

            <p>
              The teacher has received your request.
              Please wait for acceptance.
            </p>

          </div>

          <button
            className="cancel-request-btn"
            onClick={cancelRequest}
          >
            Cancel Request
          </button>

        </section>

      )}


      {/* ACCEPTED */}

      {request?.status === 'accepted' && (

        <section className="request-status-card">

          <div className="request-status-icon">
            🟢
          </div>

          <div>

            <p className="instant-label">
              REQUEST ACCEPTED
            </p>

            <h2>
              {request.teacher.name} accepted your request!
            </h2>

            <p>
              You are now connected with your teacher.
              Your doubt session is active.
            </p>

          </div>

          <button className="request-help-btn">
            Start Session →
          </button>

        </section>

      )}


      {/* SESSION ENDED */}

      {request?.status === 'ended' && (

        <section className="request-status-card">

          <div className="request-status-icon">
            ✅
          </div>

          <div>

            <p className="instant-label">
              SESSION ENDED
            </p>

            <h2>
              Your doubt session has ended
            </h2>

            <p>
              Thank you for using Saarthi. You can
              rate your teacher after the session.
            </p>

          </div>

          <button
            className="request-help-btn"
            onClick={clearRequest}
          >
            Find Another Teacher
          </button>

        </section>

      )}


      {/* DECLINED */}

      {request?.status === 'declined' && (

        <section className="request-status-card">

          <div className="request-status-icon">
            ❌
          </div>

          <div>

            <p className="instant-label">
              REQUEST DECLINED
            </p>

            <h2>
              Teacher declined the request
            </h2>

            <p>
              You can choose another available teacher.
            </p>

          </div>

          <button
            className="request-help-btn"
            onClick={clearRequest}
          >
            Find Another Teacher
          </button>

        </section>

      )}


      {/* TEACHERS */}

      <section className="teacher-results">

        <div className="results-header">

          <div>

            <p className="instant-label">
              AVAILABLE NOW
            </p>

            <h2>
              {selectedSubject
                ? `${selectedSubject} Teachers`
                : 'Teachers Available Now'}
            </h2>

            <span>
              {availableTeachers.length} available
            </span>

          </div>

          <div className="live-indicator">

            <span>●</span>

            Live availability

          </div>

        </div>


        <div className="teacher-list">

          {matchingTeachers.length === 0 && (

            <div className="no-teachers">

              <div>
                🔎
              </div>

              <h3>
                No matching teachers found
              </h3>

              <p>
                Select a different class or subject.
              </p>

            </div>

          )}


          {matchingTeachers.map((teacher) => (

            <div
              className={`instant-teacher-card ${
                teacher.status === 'busy'
                  ? 'teacher-busy'
                  : ''
              }`}
              key={teacher.id}
            >

              <div className="teacher-main-info">

                <div className="teacher-avatar-large">
                  👨‍🏫
                </div>

                <div>

                  <div className="teacher-name-row">

                    <h3>
                      {teacher.name}
                    </h3>

                    {teacher.status === 'available' ? (

                      <span className="status-available">
                        ● Available
                      </span>

                    ) : (

                      <span className="status-busy">
                        ● Busy
                      </span>

                    )}

                  </div>

                  <p>
                    {teacher.subject}
                    {' • '}
                    Class {teacher.classes.join(', ')}
                  </p>

                  <div className="teacher-meta">

                    <span>
                      ⭐ {teacher.rating}
                    </span>

                    <span>
                      👥 {teacher.students}+ students
                    </span>

                  </div>

                </div>

              </div>


              <div className="teacher-action">

                <div className="session-price">

                  <strong>
                    ₹{teacher.price}
                  </strong>

                  <span>
                    / session
                  </span>

                </div>


                {teacher.status === 'available' ? (

                  <button
                    className="request-help-btn"
                    onClick={() =>
                      handleRequest(teacher)
                    }
                    disabled={hasActiveRequest}
                  >

                    {request?.teacher?.id === teacher.id &&
                    request?.status === 'pending'
                      ? 'Request Sent'
                      : hasActiveRequest
                      ? 'Request Active'
                      : 'Request Help →'}

                  </button>

                ) : (

                  <button
                    className="busy-btn"
                    disabled
                  >
                    Currently Busy
                  </button>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* PAYMENT SAFETY */}

      <section className="payment-safety">

        <div className="safety-icon">
          🔒
        </div>

        <div>

          <h3>
            Your payment is protected
          </h3>

          <p>
            You will not be charged if a teacher does
            not accept your request. Payment will only
            be processed after the teacher accepts
            the session.
          </p>

        </div>

      </section>

    </div>
  )
}

export default InstantHelp

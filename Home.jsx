import { useState } from 'react'

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="home-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="navbar-container">

          <a href="/" className="logo">
            <span className="logo-main">
              SAARTHI
            </span>

            <span className="logo-sub">
              Education Online
            </span>
          </a>


          <div className="nav-links">

            <a href="/">
              Home
            </a>

            <a href="#live-classes">
              Live Classes
            </a>

            <a href="#tests">
              Tests
            </a>

            <a href="#career">
              Career Guidance
            </a>

            {/* Navbar Login = Role Selection */}
            <a
              href="/login"
              className="login-btn"
            >
              Login
            </a>

          </div>


          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </nav>


      {/* =========================
          MOBILE MENU
      ========================= */}

      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '65px',
            right: '15px',
            background: 'white',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            zIndex: 200
          }}
        >

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >

            <a href="/">
              Home
            </a>

            <a href="#live-classes">
              Live Classes
            </a>

            <a href="#tests">
              Tests
            </a>

            <a href="#career">
              Career Guidance
            </a>

            <a href="/login">
              Login
            </a>

          </div>

        </div>
      )}


      {/* =========================
          HERO
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            YOUR COMPLETE EDUCATION PARTNER
          </p>

          <h1>
            Learn Better.
            <span>
              Grow Smarter.
            </span>
          </h1>

          <p className="hero-description">
            Saarthi connects students, teachers and parents
            on one powerful education platform. Get instant
            doubt support, attend live classes, take tests
            and track your progress.
          </p>


          <div className="hero-buttons">

            <a
              href="/login"
              className="primary-btn"
            >
              Get Started
            </a>

            <a
              href="#features"
              className="secondary-btn"
            >
              Explore Features
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          ROLE SECTION
      ========================= */}

      <section className="role-section">

        <div className="section-heading">

          <p className="section-label">
            SAARTHI FOR EVERYONE
          </p>

          <h2>
            Choose Your Role
          </h2>

          <p>
            A dedicated experience for every member
            of the education ecosystem.
          </p>

        </div>


        <div className="role-grid">


          {/* STUDENT */}

          <div className="role-card">

            <div className="role-icon">
              👨‍🎓
            </div>

            <h3>
              Student
            </h3>

            <p>
              Learn from expert teachers, solve doubts
              instantly, attend live classes and track
              your academic progress.
            </p>

            <div className="role-buttons">

              {/* DIRECT STUDENT LOGIN */}
              <a
                href="/login/student"
                className="primary-btn"
              >
                Login
              </a>

              <a
                href="/signup"
                className="secondary-btn"
              >
                Sign Up
              </a>

            </div>

          </div>


          {/* TEACHER */}

          <div className="role-card">

            <div className="role-icon">
              👨‍🏫
            </div>

            <h3>
              Teacher
            </h3>

            <p>
              Connect with students, conduct live classes,
              solve doubts and manage your teaching
              activities from one place.
            </p>

            <div className="role-buttons">

              {/* DIRECT TEACHER LOGIN */}
              <a
                href="/login/teacher"
                className="primary-btn"
              >
                Login
              </a>

              <a
                href="/signup"
                className="secondary-btn"
              >
                Join as Teacher
              </a>

            </div>

          </div>


          {/* PARENT */}

          <div className="role-card">

            <div className="role-icon">
              👨‍👩‍👦
            </div>

            <h3>
              Parent
            </h3>

            <p>
              Monitor your child's attendance, performance,
              test results and learning progress.
            </p>

            <div className="role-buttons">

              {/* DIRECT PARENT LOGIN */}
              <a
                href="/login/parent"
                className="primary-btn"
              >
                Login
              </a>

              <a
                href="/signup"
                className="secondary-btn"
              >
                Sign Up
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================= */}

      <section
        className="features"
        id="features"
      >

        <div className="section-heading">

          <p className="section-label">
            EVERYTHING YOU NEED
          </p>

          <h2>
            Powerful Learning Features
          </h2>

          <p>
            Saarthi brings the complete learning journey
            under one roof.
          </p>

        </div>


        <div className="feature-grid">


          <div className="feature-card">

            <div className="feature-icon">
              📡
            </div>

            <h3>
              Live Classes
            </h3>

            <p>
              Join free and paid live classes
              with experienced teachers.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              🆘
            </div>

            <h3>
              Instant Doubt Help
            </h3>

            <p>
              Connect with an available teacher
              and get your doubt solved instantly.
            </p>

          </div>


          <div
            className="feature-card"
            id="tests"
          >

            <div className="feature-icon">
              📝
            </div>

            <h3>
              Online Tests
            </h3>

            <p>
              Take tests, get instant results
              and understand your performance.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              📊
            </div>

            <h3>
              Progress Reports
            </h3>

            <p>
              Track subject-wise performance,
              attendance and academic growth.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>
              Teacher Feedback
            </h3>

            <p>
              Rate your learning experience
              and share feedback with teachers.
            </p>

          </div>


          <div
            className="feature-card"
            id="career"
          >

            <div className="feature-icon">
              🎯
            </div>

            <h3>
              Career Guidance
            </h3>

            <p>
              Get career and college guidance
              after Class 10 and Class 12.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          USER PORTALS
      ========================= */}

      <section
        className="users-section"
        id="live-classes"
      >

        <div className="section-heading">

          <p className="section-label">
            ONE PLATFORM
          </p>

          <h2>
            Built For The Complete
            Education Ecosystem
          </h2>

          <p>
            Students learn, teachers teach and parents
            stay connected.
          </p>

        </div>


        <div className="user-grid">


          {/* STUDENT PORTAL */}

          <div className="user-card">

            <div className="user-number">
              01
            </div>

            <h3>
              Student Portal
            </h3>

            <p>
              Classes, tests, instant doubt solving,
              progress and learning history.
            </p>

            <a
              href="/login/student"
              className="card-btn"
            >
              Student Login →
            </a>

          </div>


          {/* TEACHER PORTAL */}

          <div className="user-card">

            <div className="user-number">
              02
            </div>

            <h3>
              Teacher Portal
            </h3>

            <p>
              Manage classes, students, doubts,
              schedules and feedback.
            </p>

            <a
              href="/login/teacher"
              className="card-btn"
            >
              Teacher Login →
            </a>

          </div>


          {/* PARENT PORTAL */}

          <div className="user-card">

            <div className="user-number">
              03
            </div>

            <h3>
              Parent Portal
            </h3>

            <p>
              Monitor your child's learning,
              attendance and academic performance.
            </p>

            <a
              href="/login/parent"
              className="card-btn"
            >
              Parent Login →
            </a>

          </div>

        </div>

      </section>


      {/* =========================
          SECURITY
      ========================= */}

      <section className="security-section">

        <div className="security-content">

          <div className="security-icon">
            🔐
          </div>

          <div>

            <p className="section-label">
              SAFE & SECURE
            </p>

            <h2>
              Your Learning Data Matters
            </h2>

            <p>
              Saarthi is designed with privacy and
              security in mind so students, teachers
              and parents can learn and connect safely.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h3>
              SAARTHI
            </h3>

            <p>
              Education Online
            </p>

          </div>


          <div className="footer-links">

            <a href="#live-classes">
              Live Classes
            </a>

            <a href="#tests">
              Tests
            </a>

            <a href="#career">
              Career Guidance
            </a>

            <a href="/login/student">
              Student
            </a>

            <a href="/login/teacher">
              Teacher
            </a>

            <a href="/login/parent">
              Parent
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Saarthi Education Online.
            All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home

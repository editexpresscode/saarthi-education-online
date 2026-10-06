function Home() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-container">

          <a href="/" className="logo">
            <span className="logo-main">SAARTHI</span>
            <span className="logo-sub">Education Online</span>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#classes">Live Classes</a>
            <a href="#tests">Tests</a>
            <a href="#guidance">Career Guidance</a>
          </nav>

          <a href="/login" className="login-btn">
            Login
          </a>

          <button className="menu-btn">
            ☰
          </button>

        </div>
      </header>


      {/* HERO */}
      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <p className="hero-label">
              SAARTHI EDUCATION ONLINE
            </p>

            <h1>
              Your Complete
              <span>Education Platform</span>
            </h1>

            <p className="hero-description">
              Attend live classes, take online tests, track your progress
              and get the right guidance for your future — all in one place.
            </p>

            <div className="hero-buttons">

              <a href="#classes" className="primary-btn">
                Explore Live Classes
              </a>

              <a href="#roles" className="secondary-btn">
                Get Started
              </a>

            </div>

          </div>

        </section>


        {/* ROLE SELECTION */}
        <section className="role-section" id="roles">

          <div className="section-heading">

            <p className="section-label">
              WELCOME TO SEO
            </p>

            <h2>
              How do you want to continue?
            </h2>

            <p>
              Choose your role to access your personalized
              Saarthi Education Online portal.
            </p>

          </div>


          <div className="role-grid">

            {/* STUDENT */}

            <article className="role-card">

              <div className="role-icon">
                🎓
              </div>

              <h3>
                I'm a Student
              </h3>

              <p>
                Attend live classes, take online tests, track your
                performance and get guidance for your future.
              </p>

              <div className="role-buttons">

                <a href="/login" className="primary-btn">
                  Login
                </a>

                <a href="/signup" className="secondary-btn">
                  Sign Up
                </a>

              </div>

            </article>


            {/* TEACHER */}

            <article className="role-card">

              <div className="role-icon">
                👨‍🏫
              </div>

              <h3>
                I'm a Teacher
              </h3>

              <p>
                Conduct live classes, create tests, manage students
                and understand their performance.
              </p>

              <div className="role-buttons">

                <a href="/login" className="primary-btn">
                  Login
                </a>

                <a href="/signup" className="secondary-btn">
                  Sign Up
                </a>

              </div>

            </article>


            {/* PARENT */}

            <article className="role-card">

              <div className="role-icon">
                👨‍👩‍👦
              </div>

              <h3>
                I'm a Parent
              </h3>

              <p>
                Monitor your child's classes, attendance, test results
                and complete learning progress.
              </p>

              <div className="role-buttons">

                <a href="/login" className="primary-btn">
                  Login
                </a>

                <a href="/signup" className="secondary-btn">
                  Sign Up
                </a>

              </div>

            </article>

          </div>

        </section>


        {/* FEATURES */}
        <section className="features" id="classes">

          <div className="section-heading">

            <p className="section-label">
              EVERYTHING IN ONE PLACE
            </p>

            <h2>
              Everything You Need to Learn Better
            </h2>

            <p>
              From live learning to performance tracking and career
              guidance, SEO brings your education journey together.
            </p>

          </div>


          <div className="feature-grid">

            <article className="feature-card">

              <div className="feature-icon">
                🎥
              </div>

              <h3>
                Live Classes
              </h3>

              <p>
                Join interactive live classes conducted by teachers
                and learn from anywhere.
              </p>

              <a href="#classes">
                Explore classes →
              </a>

            </article>


            <article className="feature-card" id="tests">

              <div className="feature-icon">
                📝
              </div>

              <h3>
                Online Tests
              </h3>

              <p>
                Take online tests, receive instant results and
                understand your strengths and weaknesses.
              </p>

              <a href="#tests">
                Take a test →
              </a>

            </article>


            <article className="feature-card">

              <div className="feature-icon">
                📊
              </div>

              <h3>
                Progress Reports
              </h3>

              <p>
                Track attendance, marks, classes, tests and overall
                learning performance.
              </p>

              <a href="#">
                View progress →
              </a>

            </article>


            <article className="feature-card" id="guidance">

              <div className="feature-icon">
                🧭
              </div>

              <h3>
                Career Guidance
              </h3>

              <p>
                Get guidance after 10th and 12th for subjects,
                streams, courses and colleges.
              </p>

              <a href="#guidance">
                Explore guidance →
              </a>

            </article>

          </div>

        </section>


        {/* PORTALS */}
        <section className="users-section">

          <div className="section-heading">

            <p className="section-label">
              ONE PLATFORM
            </p>

            <h2>
              Built for Students, Teachers & Parents
            </h2>

          </div>


          <div className="user-grid">

            <article className="user-card">

              <div className="user-number">
                01
              </div>

              <h3>
                Student Portal
              </h3>

              <p>
                Access your classes, tests, results, attendance,
                progress reports and career guidance.
              </p>

              <a href="/login" className="card-btn">
                Student Portal
              </a>

            </article>


            <article className="user-card">

              <div className="user-number">
                02
              </div>

              <h3>
                Teacher Portal
              </h3>

              <p>
                Create live classes, conduct tests, manage students
                and monitor academic performance.
              </p>

              <a href="/login" className="card-btn">
                Teacher Portal
              </a>

            </article>


            <article className="user-card">

              <div className="user-number">
                03
              </div>

              <h3>
                Parent Portal
              </h3>

              <p>
                View your child's classes, attendance, test results,
                feedback and complete progress.
              </p>

              <a href="/login" className="card-btn">
                Parent Portal
              </a>

            </article>

          </div>

        </section>


        {/* SECURITY */}
        <section className="security-section">

          <div className="security-content">

            <div className="security-icon">
              🔐
            </div>

            <div>

              <p className="section-label">
                YOUR DATA, YOUR ACCESS
              </p>

              <h2>
                Your personal education data stays protected.
              </h2>

              <p>
                Student, teacher and parent portals are designed with
                role-based access so members can access only the
                information they are authorized to see.
              </p>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">

            <h3>
              SAARTHI
            </h3>

            <p>
              Saarthi Education Online
            </p>

            <p>
              Learn better. Track progress. Plan your future.
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#classes">
              Live Classes
            </a>

            <a href="#tests">
              Tests
            </a>

            <a href="#guidance">
              Career Guidance
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Saarthi Education Online. All rights reserved.
          </p>

        </div>

      </footer>

    </div>
  )
}

export default Home
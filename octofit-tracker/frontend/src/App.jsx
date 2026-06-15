import './App.css'

import logo from '../../../docs/octofitapp-small.png'

const stats = [
  { value: '5173', label: 'Frontend port' },
  { value: '8000', label: 'API port' },
  { value: '27017', label: 'MongoDB port' },
]

const modules = [
  {
    title: 'Profiles and auth',
    text: 'Model athletes, teams, and permissions with a clean API contract.',
  },
  {
    title: 'Activity logging',
    text: 'Capture workouts, sessions, and progress updates for each member.',
  },
  {
    title: 'Competitive leaderboards',
    text: 'Surface rankings that make training plans feel immediate and social.',
  },
]

function App() {
  return (
    <main className="octofit-shell">
      <div className="octofit-orb octofit-orb-left" aria-hidden="true" />
      <div className="octofit-orb octofit-orb-right" aria-hidden="true" />

      <section className="container octofit-hero py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="octofit-kicker">OctoFit Tracker</span>
            <h1 className="display-4 fw-bold mt-3">
              One place for workouts, teams, and leaderboard momentum.
            </h1>
            <p className="lead mt-4 mb-0 text-white-75">
              React 19 and Vite power the presentation tier while Express and
              Mongoose prepare the API and data layer for athlete profiles,
              activity logs, and personalized training.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a className="btn btn-warning btn-lg" href="#modules">
                Explore modules
              </a>
              <a className="btn btn-outline-light btn-lg" href="#api">
                Review architecture
              </a>
            </div>

            <div className="row g-3 mt-5">
              {stats.map((stat) => (
                <div className="col-12 col-sm-4" key={stat.label}>
                  <div className="octofit-metric h-100">
                    <div className="octofit-metric-value">{stat.value}</div>
                    <div className="octofit-metric-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="octofit-panel shadow-lg">
              <img className="octofit-logo" src={logo} alt="OctoFit Tracker logo" />
              <h2 className="h3 fw-semibold mt-4 mb-3">Multi-tier foundation</h2>
              <p className="mb-4 text-white-75">
                The app shell is ready for routed screens, API integration, and
                MongoDB-backed data models.
              </p>

              <div className="octofit-status">
                <span className="badge text-bg-light">React 19</span>
                <span className="badge text-bg-light">Vite</span>
                <span className="badge text-bg-light">Express</span>
                <span className="badge text-bg-light">Mongoose</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-5" id="modules">
        <div className="row g-4">
          {modules.map((module) => (
            <div className="col-md-4" key={module.title}>
              <article className="octofit-card h-100">
                <h2 className="h4">{module.title}</h2>
                <p className="mb-0 text-white-75">{module.text}</p>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="container pb-5" id="api">
        <div className="octofit-footer-card">
          <div>
            <span className="octofit-kicker">API ready</span>
            <h2 className="h3 fw-semibold mt-3">Backend and data tier landing zone</h2>
          </div>
          <p className="mb-0 text-white-75">
            The backend is initialized on port 8000 with Express, TypeScript,
            and Mongoose connected to <span className="fw-semibold">octofit_db</span>.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App

import { Link } from 'react-router-dom'
import Button from '../components/Button'
import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Danny Han</span>
            </h1>
            <p className="hero-subtitle">
              Applied Statistics Student at University of Toronto
            </p>
            <p className="hero-description">
              I specialize in statistical analysis, mathematical modeling, and software development. 
              With a major in Applied Statistics and minors in Mathematical Sciences and Computer Science, 
              I turn complex data into actionable insights.
            </p>
            <div className="hero-cta">
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="profile-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL || '/'}profile.jpg`} 
              alt="Profile" 
              className="profile-image"
              loading="eager"
            />
            <div className="profile-image-glow"></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

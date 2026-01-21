import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './Projects.css'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const allProjects = [...projects.cs, ...projects.stats]
  const csProjects = projects.cs
  const statsProjects = projects.stats

  const getProjectsToShow = () => {
    if (activeCategory === 'cs') return csProjects
    if (activeCategory === 'stats') return statsProjects
    return allProjects
  }

  return (
    <div className="page projects-page">
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <p className="projects-description">
          A collection of my work in Computer Science and Statistics. Each project demonstrates 
          problem-solving, technical skills, and real-world applications.
        </p>

        <div className="projects-filter">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${activeCategory === 'cs' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cs')}
          >
            Computer Science
          </button>
          <button
            className={`filter-btn ${activeCategory === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveCategory('stats')}
          >
            Statistics
          </button>
        </div>

        {activeCategory === 'all' && (
          <>
            {csProjects.length > 0 && (
              <section className="projects-section">
                <h2 className="section-title">Computer Science Projects</h2>
                <div className="projects-grid">
                  {csProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} category="cs" />
                  ))}
                </div>
              </section>
            )}

            {statsProjects.length > 0 && (
              <section className="projects-section">
                <h2 className="section-title">Statistics Projects</h2>
                <div className="projects-grid">
                  {statsProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} category="stats" />
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {(activeCategory === 'cs' || activeCategory === 'stats') && (
          <section className="projects-section">
            <div className="projects-grid">
              {getProjectsToShow().map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  category={activeCategory} 
                />
              ))}
            </div>
          </section>
        )}

        {getProjectsToShow().length === 0 && (
          <div className="projects-empty">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects

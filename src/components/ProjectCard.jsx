import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import './ProjectCard.css'

function ProjectCard({ project, category }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleDownloadReport = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.report) {
      const link = document.createElement('a')
      link.href = project.report
      link.download = `${project.id}-report.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="project-card">
      <Link 
        to={`/projects/${category}/${project.id}`} 
        className="project-card-link"
      >
        <div className="project-card-image-container">
          {!imageError && project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="project-card-image"
              onError={handleImageError}
              loading="lazy"
            />
          ) : (
            <div className="project-card-image-placeholder">
              <span className="placeholder-icon">📊</span>
            </div>
          )}
          <div className="project-card-overlay">
            <span className="project-card-view">View Details</span>
          </div>
        </div>
        <div className="project-card-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-problem">{project.problem}</p>
          <div className="project-card-meta">
            <span className="project-card-role">
              <strong>Role:</strong> {project.role}
            </span>
            <div className="project-card-tools">
              {project.tools.slice(0, 3).map((tool, index) => (
                <span key={index} className="tool-tag">{tool}</span>
              ))}
              {project.tools.length > 3 && (
                <span className="tool-tag">+{project.tools.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="project-card-actions">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-card-github"
          onClick={(e) => e.stopPropagation()}
        >
          <span>🔗</span> GitHub
        </a>
        {project.report && (
          <button 
            onClick={handleDownloadReport}
            className="project-card-download"
          >
            <span>📥</span> Report
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

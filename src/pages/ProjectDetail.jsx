import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Button from '../components/Button'
import './ProjectDetail.css'

function ProjectDetail() {
  const { category, id } = useParams()
  const navigate = useNavigate()
  
  const allProjects = [...projects.cs, ...projects.stats]
  const project = allProjects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="page project-detail-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to="/projects">
            <Button variant="primary">Back to Projects</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleDownloadReport = () => {
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
    <div className="page project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="back-link">
          ← Back to Projects
        </Link>

        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-category">
            {category === 'cs' ? 'Computer Science' : 'Statistics'}
          </div>
        </div>

        {project.image && (
          <div className="project-detail-image-container">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-detail-image"
            />
          </div>
        )}

        <div className="project-detail-content">
          <section className="project-detail-section">
            <h2 className="section-heading">Problem Statement</h2>
            <p className="project-detail-problem">{project.problem}</p>
          </section>

          <section className="project-detail-section">
            <h2 className="section-heading">My Role</h2>
            <p className="project-detail-role">{project.role}</p>
          </section>

          <section className="project-detail-section">
            <h2 className="section-heading">Tools & Technologies</h2>
            <div className="project-detail-tools">
              {project.tools.map((tool, index) => (
                <span key={index} className="tool-badge">{tool}</span>
              ))}
            </div>
          </section>

          <section className="project-detail-section">
            <h2 className="section-heading">What I Did</h2>
            <p className="project-detail-description">{project.whatIdid}</p>
          </section>

          <section className="project-detail-section">
            <h2 className="section-heading">Outcome & Insights</h2>
            <p className="project-detail-outcome">{project.outcome}</p>
          </section>

          <div className="project-detail-actions">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="action-link"
            >
              <Button variant="primary" size="lg">
                <span>🔗</span> View on GitHub
              </Button>
            </a>
            {project.report && (
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadReport}
                className="action-button"
              >
                <span>📥</span> Download Report (PDF)
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail

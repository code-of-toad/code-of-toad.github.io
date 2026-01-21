import Button from '../components/Button'
import './Resume.css'

function Resume() {
  const handleDownload = () => {
    // One-click PDF download - no forms required
    // The resume.pdf file should be placed in the public folder
    const baseUrl = import.meta.env.BASE_URL || '/'
    const resumePath = `${baseUrl}resume.pdf`
    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="page resume-page">
      <div className="resume-container">
        <h1 className="resume-title">Resume</h1>
        <p className="resume-description">
          Download my resume as a PDF to view my academic background, skills, and experience.
        </p>
        <div className="resume-download-section">
          <Button 
            onClick={handleDownload}
            variant="primary"
            size="lg"
            className="resume-download-btn"
          >
            <span className="download-icon">⬇</span>
            Download Resume (PDF)
          </Button>
          <p className="resume-note">
            One-click download • No forms required
          </p>
        </div>
      </div>
    </div>
  )
}

export default Resume

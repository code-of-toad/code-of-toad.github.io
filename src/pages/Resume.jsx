import Button from '../components/Button'
import './Resume.css'

function Resume() {
  const baseUrl = import.meta.env.BASE_URL || '/'
  const resumePath = `${baseUrl}resume.pdf`

  const handleDownload = () => {
    // One-click PDF download - no forms required
    const link = document.createElement('a')
    link.href = resumePath
    link.download = 'Resume_Danny_Han.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="page resume-page">
      <div className="resume-container">
        <h1 className="resume-title">Resume</h1>
        <div className="resume-viewer-section">
          <div className="resume-download-section">
            <Button 
              onClick={handleDownload}
              variant="primary"
              size="md"
              className="resume-download-btn"
            >
              <span className="download-icon">⬇</span>
              Download Resume (PDF)
            </Button>
            <p className="resume-note">
              One-click download • No forms required
            </p>
          </div>
          <div className="resume-pdf-container">
            <iframe 
              src={`${resumePath}#toolbar=1&navpanes=1&scrollbar=1`}
              className="resume-pdf-viewer"
              title="Resume PDF Viewer"
              type="application/pdf"
            >
              <p className="resume-fallback">
                Your browser does not support PDFs. 
                <a href={resumePath} download="Resume_Danny_Han.pdf">Download the resume instead</a>.
              </p>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume

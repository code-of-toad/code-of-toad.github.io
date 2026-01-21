function Resume() {
  const handleDownload = () => {
    // TODO: Implement one-click PDF download
    // This should be a direct download link with no forms
    alert('Resume download will be implemented here - one-click, no forms')
  }

  return (
    <div className="page resume-page">
      <h1>Resume</h1>
      <button 
        onClick={handleDownload}
        className="resume-download-btn"
      >
        Download Resume (PDF)
      </button>
    </div>
  )
}

export default Resume

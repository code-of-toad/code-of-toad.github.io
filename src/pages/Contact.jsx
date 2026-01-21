import './Contact.css'

function Contact() {
  return (
    <div className="page contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-description">
          Feel free to reach out if you'd like to collaborate, have questions, or just want to connect!
        </p>
        
        <div className="contact-links">
          <a 
            href="mailto:danny.han@mail.utoronto.ca" 
            className="contact-link email-link"
            aria-label="Send an email"
          >
            <span className="contact-icon">✉</span>
            <div className="contact-link-content">
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">danny.han@mail.utoronto.ca</span>
            </div>
          </a>
          
          <a 
            href="https://github.com/code-of-toad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link github-link"
            aria-label="Visit GitHub profile"
          >
            <span className="contact-icon">💻</span>
            <div className="contact-link-content">
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">github.com/code-of-toad</span>
            </div>
          </a>
          
          <a 
            href="https://linkedin.com/in/danny-han-6c6f7665" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link linkedin-link"
            aria-label="Visit LinkedIn profile"
          >
            <span className="contact-icon">💼</span>
            <div className="contact-link-content">
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">linkedin.com/in/danny-han-6c6f7665</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact

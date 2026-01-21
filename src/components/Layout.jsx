import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout({ children }) {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="layout">
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Portfolio
          </Link>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={isActive('/about') ? 'nav-link active' : 'nav-link'}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/resume" 
                className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Portfolio Site</p>
      </footer>
    </div>
  )
}

export default Layout

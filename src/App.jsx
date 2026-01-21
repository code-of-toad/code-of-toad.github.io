import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

// Component to handle GitHub Pages 404 redirect
function RedirectHandler() {
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    // Check if we have a redirect path in the query string (from 404.html)
    // The 404.html script redirects to /?/path, so we check for the '/' key
    const queryParams = new URLSearchParams(location.search)
    const redirectPath = queryParams.get('/')
    
    if (redirectPath) {
      // Decode the path: replace '~and~' with '&' and ensure it starts with '/'
      let decodedPath = redirectPath.replace(/~and~/g, '&')
      if (!decodedPath.startsWith('/')) {
        decodedPath = '/' + decodedPath
      }
      
      // Only redirect if the current path doesn't match
      if (location.pathname !== decodedPath) {
        // Use React Router's navigate to change the route
        navigate(decodedPath, { replace: true })
      }
    }
  }, [location, navigate])
  
  return null
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RedirectHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:category/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

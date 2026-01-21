import { useParams, Link } from 'react-router-dom'
import { getPostById } from '../data/blogPosts'
import MarkdownRenderer from '../components/MarkdownRenderer'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const post = getPostById(id)

  if (!post) {
    return (
      <div className="page blog-post-page">
        <div className="blog-post-not-found">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <button className="btn btn-primary">Back to Blog</button>
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="page blog-post-page">
      <div className="blog-post-container">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <article className="blog-post">
          <header className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-post-category">{post.category}</span>
              <span className="blog-post-date">{formatDate(post.date)}</span>
              {post.readTime && (
                <span className="blog-read-time">{post.readTime}</span>
              )}
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="blog-post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">{tag}</span>
                ))}
              </div>
            )}
          </header>

          <div className="blog-post-content">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogPost

// Simple markdown renderer for blog posts
// Supports basic markdown syntax without external dependencies

function MarkdownRenderer({ content }) {
  // Simple markdown parsing function
  const parseMarkdown = (text) => {
    let html = text

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')

    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    html = html.replace(/__(.*?)__/gim, '<strong>$1</strong>')

    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
    html = html.replace(/_(.*?)_/gim, '<em>$1</em>')

    // Code blocks
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/gim, (match, lang, code) => {
      return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code)}</code></pre>`
    })

    // Inline code
    html = html.replace(/`([^`]+)`/gim, '<code>$1</code>')

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

    // Unordered lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>')
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')

    // Ordered lists
    html = html.replace(/^\d+\. (.*$)/gim, '<li>$1</li>')

    // Paragraphs (split by double newlines)
    html = html.split(/\n\n+/).map(para => {
      if (!para.trim()) return ''
      if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<pre') || para.startsWith('<ol')) {
        return para
      }
      return `<p>${para.replace(/\n/g, '<br />')}</p>`
    }).join('')

    // Clean up empty paragraphs
    html = html.replace(/<p><\/p>/g, '')

    return html
  }

  const escapeHtml = (text) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }
    return text.replace(/[&<>"']/g, m => map[m])
  }

  const renderedContent = parseMarkdown(content)

  return (
    <div 
      className="markdown-content"
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  )
}

export default MarkdownRenderer

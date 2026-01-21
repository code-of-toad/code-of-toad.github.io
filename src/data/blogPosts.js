// Blog posts data structure
// To add a new post, simply add a new object to this array
// The posts will automatically appear in chronological order (newest first)

export const blogPosts = [
  {
    id: 'post-1',
    title: 'Sample Blog Post',
    date: '2024-12-19',
    excerpt: 'This is a sample blog post excerpt that will appear in the blog listing page.',
    category: 'Statistics',
    tags: ['Data Analysis', 'R', 'Visualization'],
    content: `
# Sample Blog Post

This is a sample blog post demonstrating the blog/notes section functionality.

## Introduction

You can write your blog posts in markdown format here. The content supports:

- **Bold text**
- *Italic text*
- Lists (both ordered and unordered)
- Code blocks
- Links
- And more markdown features

## Main Content

This section demonstrates how you can structure longer-form content for your blog posts. You can write about:

1. Statistical analysis methods
2. Programming techniques
3. Academic insights
4. Project reflections
5. Technical tutorials

## Code Example

Here's an example of code formatting:

\`\`\`python
import pandas as pd
import numpy as np

# Load data
data = pd.read_csv('data.csv')

# Perform analysis
results = data.groupby('category').mean()
print(results)
\`\`\`

## Conclusion

This is a fully functional blog system that you can use to share your thoughts, insights, and learnings.
    `.trim(),
    readTime: '5 min read'
  }
]

// Helper function to get posts sorted by date (newest first)
export const getSortedPosts = () => {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// Helper function to get post by ID
export const getPostById = (id) => {
  return blogPosts.find(post => post.id === id)
}

// Helper function to get posts by category
export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

// Helper function to get all unique categories
export const getCategories = () => {
  return [...new Set(blogPosts.map(post => post.category))]
}

// Blog posts data structure
// To add a new post, simply add a new object to this array
// The posts will automatically appear in chronological order (newest first)

export const blogPosts = [
  {
    id: 'post-1',
    title: 'Free Will',
    date: '2025-01-15',
    excerpt: 'Exploring the nature of free will as the human ability to account for deterministic future chains of events and make choices accordingly, and how literature and art expand our consciousness and capability of free will.',
    category: 'Philosophy',
    tags: ['Free Will', 'Consciousness', 'Literature', 'Art'],
    content: `
# Free Will

I define free will to be the human ability to account for deterministic future chains of events and make a choice accordingly. Although, of course, it's impossible to predict futures with accuracy. They can only be inferred via past experiences and examples from others. This ignorance is a call to humility as a human being who cannot know more than human's own conception of God. But, I digress.

The caveat here is that the set of choices that present themselves to the mind appears to be constrained by all (but, only) all that one knows.

This is perhaps why mythologies, canonical stories of culture, music and other art forms are passed on through time, because under past-determined constraints that are one's environment and upbringing, literature and art introduce & exemplify the manifestation of new possibilities, thereby expanding the boundary of constraints to which one's free will is subject.

In other words, literature and art expand one's consciousness and capability of free will.
    `.trim(),
    readTime: '2 min read'
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

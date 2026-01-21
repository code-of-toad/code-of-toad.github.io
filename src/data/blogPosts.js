// Blog posts data structure
// To add a new post, simply add a new object to this array
// The posts will automatically appear in chronological order (newest first)

export const blogPosts = [
  {
    id: 'post-2',
    title: 'Flower',
    date: '2026-01-19',
    excerpt: 'A meditation on diversity, ideas, and human potential—comparing functioning diversity to a flower whose petals of differences manifest from a common center, grounded in nourishment and time.',
    category: 'Philosophy',
    tags: ['Diversity', 'Ideas', 'Human Potential', 'Philosophy'],
    content: `
An individual set of ideas is one circle in a Venn diagram. All sets of ideas that form a healty center of commonality are worthy to subject to the test of time.

A functioning diversity is not a melting pot of homogeneity, nor is it a chaotic battlefield of differences, but, rather, a flower whose petals of inextinguishable differences manifest the Fibonacci sequence from the bud of human potential founded on the stem of commonality, grounded in the soil of nourishment that is water and time, to look & grow towards the Sun without flying towards it.

The origin of the seed is philosophy.
    `.trim(),
    readTime: '1 min read'
  },
  {
    id: 'post-1',
    title: 'Free Will',
    date: '2026-01-18',
    excerpt: 'Exploring the nature of free will as the human ability to account for deterministic future chains of events and make choices accordingly, and how literature and art expand our consciousness and capability of free will.',
    category: 'Philosophy',
    tags: ['Free Will', 'Consciousness', 'Literature', 'Art'],
    content: `
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

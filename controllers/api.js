var express = require('express');
var router = express.Router();


// Static mock data... to be migrated to a DB in production
const posts = [
  {
    id: 1,
    title: 'My Blog Post 1',
    content: '<p>Content</p>',
    author: 'Randy Layne'
  },
  {
    id: 2,
    title: 'My Blog Post 2',
    content: '<p>Content</p>',
    author: 'Sandra Fisher'
  },
  {
    id: 3,
    title: 'My Blog Post 3',
    content: '<p>Content</p>',
    author: 'Randy Layne'
  },

]

// GET base route
router.get('/', (req, res) => {
  res.send(`
    <p>API Endpoints:</p>
    <ul>
    <li>/api/posts</li>
    <li>/api/posts/:id</li>
    </ul>
  `);
});

// GET posts
router.get('/posts', (req, res) => {
  res.json({ response: posts });
});

// GET spedific post
router.get('/posts/:id', (req, res) => {
  const { params: { id } } = req;

  const singlePost = posts.find(post => post.id === Number(id));

  if (!singlePost) {
    res.send({
      error: true,
      message: 'Post not found'
    });
  } else {
    res.json({ response: [singlePost] });
  }
});

export default router;

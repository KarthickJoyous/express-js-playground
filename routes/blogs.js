const express = require('express');
const router = express.Router();

const { listBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/', listBlogs);

router.post('/', createBlog);

router.get('/:blog', getBlog);

router.put('/:blog', updateBlog);

router.delete('/:blog', deleteBlog);

module.exports = router;
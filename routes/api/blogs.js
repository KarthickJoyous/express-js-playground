const express = require('express');
const router = express.Router();
const { listBlogRequest, createBlogRequest } = require('../api/requests/blogs/blogValidators');

const { listBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require('../../controllers/blogController');

router.get('/', listBlogRequest, listBlogs);

router.post('/', createBlogRequest, createBlog);

router.get('/:blog', getBlog);

router.put('/:blog', createBlogRequest, updateBlog);

router.delete('/:blog', deleteBlog);

module.exports = router;
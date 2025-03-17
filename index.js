const express = require('express');
const app = express();
const { logger } = require('./middlewares/logger');
const { home } = require('./controllers/homeController');
const { listBlogs, createBlog, getBlog, updateBlog, deleteBlog } = require('./controllers/blogController');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(logger);

app.get('/', home);

app.get("/blogs", listBlogs);
app.post('/blogs', createBlog);
app.get('/blogs/:blog', getBlog);
app.put('/blogs/:blog', updateBlog);
app.delete('/blogs/:blog', deleteBlog);

app.listen(port, () => {
    console.log(`Server http://localhost:${port}`);
});
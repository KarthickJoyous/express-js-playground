require('dotenv').config();
const express = require('express');
const app = express();

const { logger } = require('./middlewares/logger');

const { home } = require('./controllers/homeController');

const blogsRoute = require('./routes/blogs');

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(logger);

app.get('/', home);
app.use('/blogs', blogsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT}`);
});
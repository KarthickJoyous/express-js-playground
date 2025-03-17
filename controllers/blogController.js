const listBlogs = (req, res) => {
    res.send({
        success: true,
        message : "Blogs Fetched.",
        data: {
            blogs: []
        }
    });
}

const createBlog = (req, res) => {
    res.send({
        success: true,
        message: "Blog Created.",
        data: {
            blog : {
                title: req.body.title,
                description: req.body.description
            }
        }
    });
}

const getBlog = (req, res) => {
    res.send({
        success: true,
        message: "Blog Fetched.",
        data: {
            blog : req.params.blog
        }
    });
}

const updateBlog = (req, res) => {
    res.send({
        success: true,
        message: "Blog Updated",
        data: {
            blog: req.params.blog
        }
    });
}

const deleteBlog = (req, res) => {
    res.send({
        success: true,
        message: "Blog Deleted.",
        data: {
            blog: req.params.blog
        }
    });
}

module.exports = {
    listBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}
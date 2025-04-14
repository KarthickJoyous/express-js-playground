const db = require('../config/db');

const listBlogs = async (req, res) => {
    try {

        const { offset, limit, sort_by } = req.query;

        const [blogs] = await db.execute(`select id, title from blogs where user_id = ? order by id ${sort_by} LIMIT ?, ?`, [req.user.id, offset, limit]);

        const [totalBlogs] = await db.execute('select COUNT(*) as total_blogs from blogs where user_id', [req.user.id]);

        return res.send({
            success: true,
            message: "Blogs Fetched.",
            data: {
                total_blogs: totalBlogs[0]['total_blogs'],
                blogs: blogs
            }
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
}

const createBlog = async (req, res) => {
    try {

        const sql = 'INSERT INTO `blogs`(`user_id`, `title`) VALUES (?, ?)';

        const values = [req.user.id, req.body.title];

        const [blog] = await db.execute(sql, values);

        if (!blog.affectedRows) {
            throw new Error('Create blog failed. Please try again.');
        }

        const [createdBlog] = await db.execute(`select id, title from blogs where id = ${blog.insertId} limit 1`);

        return res.send({
            success: true,
            message: "Blog Created.",
            data: {
                blog: createdBlog[0]
            }
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
}

const getBlog = async (req, res) => {
    try {

        return res.send({
            success: true,
            message: "Blog Fetched.",
            data: {
                blog: await findBlog(req.params.blog, req.user.id)
            }
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
}

const updateBlog = async (req, res) => {
    try {

        const [blogId, userId, title] = [
            req.params.blog,
            req.user.id,
            req.body.title
        ];

        const blog = await findBlog(blogId, userId);

        const [result] = await db.execute('update blogs set title = ? where id = ? and user_id = ?', [title, blogId, userId]);

        if (!result.affectedRows) {
            throw new Error('Blog updation failed. Please try again.');
        }

        return res.send({
            success: true,
            message: "Blog Updated",
            data: {
                blog: {
                    id: blog.id,
                    title
                }
            }
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
}

const deleteBlog = async (req, res) => {
    try {

        const [blogId, userId] = [
            req.params.blog,
            req.user.id
        ];

        const blog = await findBlog(blogId, userId);

        const [result] = await db.execute('delete from blogs where id = ? and user_id = ?', [blogId, userId]);

        if (!result.affectedRows) {
            throw new Error('Blog deletion failed. Please try again.');
        }

        return res.send({
            success: true,
            message: "Blog Deleted.",
            data: {
                blog: blog
            }
        });
    } catch (err) {
        return res.send({
            success: false,
            message: err.message,
            data: {}
        });
    }
}

const findBlog = async (blogId, userId) => {

    const [blog] = await db.execute(`select id, title from blogs where id = ? and user_id = ?`, [blogId, userId]);

    if (!blog || !blog[0] || !blog[0].id) {
        throw new Error('Blog not found.');
    }

    return blog[0];
}

module.exports = {
    listBlogs,
    createBlog,
    getBlog,
    updateBlog,
    deleteBlog
}
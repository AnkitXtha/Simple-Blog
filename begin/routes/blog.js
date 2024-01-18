const express = require('express')
const router = express.Router();
const Blogs = require('./../models/blog')

//Getting all blogs
router.get('/', async(req, res) => {
    try{
        const blog = await Blogs.find();
        if(blog.length !== 0){
            res.status(200).json(blog)
        }else{
            res.status(404).json(null)
        }
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

//Post blog
router.post('/postBlog', async(req, res) => {
    const blog = new Blogs({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        _token: req.body.token
    })
    try {
        const newBlog = await blog.save();
        res.status(200).json({newBlog, message: "Blog added successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;
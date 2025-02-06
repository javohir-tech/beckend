const postServer = require("../server/post.server")

class PostConrtoller {
    async getAll(req, res) {
        try {
            const allPosts = await postServer.getAll()
            res.status(200).json(allPosts)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async create(req, res) {
        try {
            const post = await postServer.create(req.body, req.files.picture)
            res.status(201).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const post = await postServer.delete(req.params.id)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async edit(req, res){
        try {
            const {body, params}= req
            const post = await postServer.edit(body, params.id)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async getOne(req, res){
        try {
            const post = await postServer.getOne(req.params.id)
            res.status(200).json(post)
        } catch (error) {   
            res.status(500).json(error)
        }
    }
}
 
module.exports = new PostConrtoller()
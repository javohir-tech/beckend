const postModel = require("../models/post.model");
const fileServer = require("./file.server");

class PostServise {
    async getAll() {
        const allPosts = await postModel.find()
        return allPosts
    }
    async create(post, picture) {
        const fileName = fileServer.save(picture);
        const newPost = await postModel.create({ ...post, picture: fileName })
        return newPost
    }
    async delete(id) {
        const post = postModel.findByIdAndDelete(id)
        return post
    }
    async edit(post, id) {
        const updateData = await postModel.findByIdAndUpdate(id, post, {
            new: true
        })

        return updateData
    }
    async getOne(id) {
        const post = await postModel.findById(id)
        return post
    }
}


module.exports = new PostServise()
const postModel = require("../models/post.model");

class PostServise {
    async getAll() {
        const allPosts = await postModel.find()
        return allPosts
    }
    async create(post){
        const newPost = await postModel.create(post)
        return newPost
    }
    async delete(id){
        const post = postModel.findByIdAndDelete(id)
        return post
    }
    async edit(post, id){
        const updateData = await postModel.findByIdAndUpdate(id, post, {
            new:true
        })

        return updateData
    }
    async getOne(id){
        const post = await postModel.findById(id)
        return post
    }
}


module.exports = new PostServise()
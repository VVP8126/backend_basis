import Post from "./../models/post.js"

// Service layer
class PostService {
    async insert(author, title, content) {
        const post = await Post.create({ author, title, content });
        return post;
    }
    async select() {
        const posts = await Post.find();
        return posts;
    }
    async selectById(id) {
        const post = await Post.findById(id);
        return post;
    }
    async update(post) {
        post = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return post;
    }
    async delete(id) {
        if(!id) {
            throw new Error("Id not defined !");
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
}
export default new PostService();

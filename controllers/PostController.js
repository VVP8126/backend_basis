import PostService from "../service/PostService.js";

class PostController {
    async create(request, responce) {
        try {
            console.log(request.files);
            console.log(request.body);
            const { author, title, content } = request.body;
            const post = await PostService.insert(author, title, content);
            return responce.status(200).json(post);
        } catch(e) {
            responce.status(500).json(e);
        }
    }
}
export default new PostController();

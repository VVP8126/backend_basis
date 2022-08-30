import PostService from "./../service/PostService.js";

class GetController {
    async getAll(request, responce) {
        try {
            const posts = await PostService.select();
            return responce.status(200).json(posts);
        } catch(e) {
            responce.status(500).json(e);
        }
    }
    async getOne(request, responce) {
        try {
            const { id } = request.params;
            if(!id) {
                responce.status(200).json("Information not found !");
                // Otherwise:
                // responce.status(400).json({ message:"Error. Information not found !" });
            }
            const post = await PostService.selectById(id);
            return responce.status(200).json(post);
        } catch(e) {
            responce.status(500).json(e);
        }
    }
}
export default new GetController();

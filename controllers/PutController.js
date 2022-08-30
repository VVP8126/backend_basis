import PostService from "../service/PostService.js";

class PutController {
    async update(request, responce) {
        try {
            const post = request.body;
            if(!post._id) {
                responce.status(200).json("Information not found");
                // Or:
                // responce.status(400).json({message: "Information not found"});
            }
            const updatedPost = await PostService.update(post);
            return responce.status(200).json(updatedPost);
        } catch(e) {
            responce.status(500).json(e);
        }
    }
}
export default new PutController();

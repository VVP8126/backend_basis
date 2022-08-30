import PostService from "../service/PostService.js";

class DeleteController {
    async delete(request, responce) {
        try {
            const {id} = request.params;
            const post = await PostService.delete(id);
            return responce.status(200).json(post);
        } catch(e) {
            responce.status(500).json(e);
        }
    }
}
export default new DeleteController();

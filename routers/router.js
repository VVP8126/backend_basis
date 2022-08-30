import { Router } from "express";
import PostController   from "./../controllers/PostController.js";
import GetController    from "./../controllers/GetController.js";
import PutController    from "./../controllers/PutController.js";
import DeleteController from "./../controllers/DeleteController.js";

const router = new Router();

router.post("/posts",       PostController.create);
router.get("/posts",        GetController.getAll);
router.get("/posts/:id",    GetController.getOne);
router.put("/posts",        PutController.update);
router.delete("/posts/:id", DeleteController.delete);

export default router;

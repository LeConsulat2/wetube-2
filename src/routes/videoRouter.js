import { deleteVideo, editVideo, getUpload, postUpload, videoDetail } from "../controllers/videoController";


const videoRouter = express.Router();

videoRouter.get("/upload", getUpload);
videoRouter.post("/upload", postUpload);
videoRouter.get("/:id", videoDetail);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
import { changePassword, editProfile, userDetail } from "../controllers/userController";


const userRouter = express.Router();

userRouter.get("/edit-profile", editProfile)
userRouter.get("/change-password", changePassword);
userRouter.get("/:id", userDetail);

export default userRouter;
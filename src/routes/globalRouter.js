import express from "express";
import { home, search } from "../controllers/videoController";
import { getJoin, getLogin, postJoin, postLogin } from "../controllers/userController";



const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/search", search);
globalRouter.get("/joiin", getJoin);
globalRouter.get("/join", postJoin);
globalRouter.get("/login", getLogin);
globalRouter.get("/login", postLogin);

export default globalRouter;


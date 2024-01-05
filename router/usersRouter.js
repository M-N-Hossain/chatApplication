import express from "express";
import { getUsers } from "../controller/usersController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHtmlResponse.js";

const usersRouter = express.Router();

// users page
usersRouter.get("/", decorateHtmlResponse("Users"), getUsers);

export default usersRouter;

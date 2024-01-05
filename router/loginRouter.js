import express from "express";
import { getLogin } from "../controller/loginController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHtmlResponse.js";

const loginRouter = express.Router();

// login page
loginRouter.get("/", decorateHtmlResponse("Login"), getLogin);

export default loginRouter;

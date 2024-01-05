import express from "express";
import { getInbox } from "../controller/inboxController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHtmlResponse.js";

const inboxRouter = express.Router();

// inbox page
inboxRouter.get("/", decorateHtmlResponse("Inbox"), getInbox);

export default inboxRouter;

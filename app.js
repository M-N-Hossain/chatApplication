import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import loginRouter from "./router/loginRouter.js";
import usersRouter from "./router/usersRouter.js";
import inboxRouter from "./router/inboxRouter.js";

// Internal import
import {
  notFoundHandler,
  errorHandler,
} from "./middlewares/common/errorHandler.js";

const app = express();

// Database Connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log(err));

//   request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static("public"));

// parse coockies
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 Not found handler
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`);
});

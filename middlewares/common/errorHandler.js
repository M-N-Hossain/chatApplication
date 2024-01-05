import createHttpError from "http-errors";

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createHttpError(404, "Your request countent was not found!"));
}

function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };

  res.status(err.status || 500);

  if (!res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json(res.locals.error);
  }
}
export { notFoundHandler, errorHandler };

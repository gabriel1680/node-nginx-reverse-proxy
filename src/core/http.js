const serverError = (error, req, res, next) => {
  if (!(error instanceof Error)) return next();
  res.statusCode = 500;
  return res.send("<h1>500: Internal server error</h1>");
}

const notFound = (req, res, next) => {
  if (req.route) return next();
  res.statusCode = 404;
  return res.send("<h1>404: resource not found</h1>");
}

module.exports = { serverError, notFound };
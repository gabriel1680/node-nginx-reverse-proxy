const serverError = res => {
  res.statusCode = 500;
  return res.end("<h1>500: Internal server error</h1>");
}

const notFound = res => {
  res.statusCode = 404;
  return res.end("<h1>404: resource not found</h1>");
}

module.exports = { serverError, notFound };
module.exports = (req, res, next) => {
  console.log(`${req.method} ${req.url} - Body:`, req.body);
  next();
};
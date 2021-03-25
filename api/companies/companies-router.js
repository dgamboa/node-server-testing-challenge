const router = require("express").Router();
const {} = require("./companies-middleware");
const Company = require("./companies-model");

router.get("/", (req, res, next) => {
  try {
    return res.json({message: "GET endpoint is up"})
  } catch(err) { next(err) }
});

// next endpoint

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;

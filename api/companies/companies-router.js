const router = require("express").Router();
const {} = require("./companies-middleware");
const Company = require("./companies-model");

router.get("/", (req, res, next) => {
  try {
    return res.json({message: "GET endpoint is up"})
  } catch(err) { next(err) }
});

router.get("/:id", (req, res, next) => {
  try {
    return res.json({message: "GET:id endpoint is up"})
  } catch(err) { next(err) }
});

router.post("/", (req, res, next) => {
  try {
    return res.json({message: "POST endpoint is up"})
  } catch(err) { next(err) }
});

router.put("/:id", (req, res, next) => {
  try {
    return res.json({message: "PUT endpoint is up"})
  } catch(err) { next(err) }
});

router.delete("/:id", (req, res, next) => {
  try {
    return res.json({message: "DELETE endpoint is up"})
  } catch(err) { next(err) }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;

const { createUser } = require("./user.controller");
const router = require("express").Router();

router.post("/users", createUser);

module.exports = router;
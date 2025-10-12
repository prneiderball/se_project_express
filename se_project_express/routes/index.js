const router = require("express").Router();
const { createUser, login } = require("../controllers/users");
const auth = require("../middlewares/auth");
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { validateUserBody, validateLogin } = require("../middlewares/validation");
const { NOT_FOUND } = require("../utils/statusCodes");

router.post("/signup", validateUserBody, createUser);

router.post("/signin", validateLogin, login);

router.use("/items", itemRouter);

router.use(auth);

router.use("/users", userRouter);

router.use((req, res) =>
  res.status(NOT_FOUND).json({ message: "This page doesn't exist" })
);

module.exports = router;

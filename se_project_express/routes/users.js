const router = require("express").Router();
const { getCurrentUser, updateUserProfile } = require("../controllers/users");
const { validateUserBody } = require("../middlewares/validation");

router.get("/me", getCurrentUser);

router.patch("/me", validateUserBody, updateUserProfile);

module.exports = router;

const router = require("express").Router();
const userRoutes = require("./userRoutes.js");
const postRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;

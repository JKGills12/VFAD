const router = require("express").Router();
const hostRoutes = require("./host");

// Host routes
router.use("/host", hostRoutes);

module.exports = router;
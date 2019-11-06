const router = require("express").Router();
const hostController = require("../../controllers/hostController");


// Matches with "/api/host"
router.route("/")
  .get(hostController.findAll)
  .post(hostController.create);

// Matches with "/api/host/:id"
router
  .route("/:id")
  .get(hostController.findById)
  .put(hostController.update)
  .delete(hostController.remove);

router.route('/signup')
  .post(hostController.signUp)


module.exports = router;
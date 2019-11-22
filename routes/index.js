const router = require("express").Router();
const contactInfoController = require("./../controllers/contactInfoController");
db = require('./../models')

router.route("/contactInfo")
  .post(contactInfoController.create)




module.exports = router;


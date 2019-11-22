const db = require('./../models');

module.exports = {
  create: function (req, res) {
    console.log(req.body.contactInfo)
    // const contact = {
    //   "name": req.body.name,
    //   "email": req.body.email,
    //   "message": req.body.message
    // }
    db.Contact
      .create(req.body.contactInfo)
      .then(function (dbContact) {
        console.log("Successful Save")
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
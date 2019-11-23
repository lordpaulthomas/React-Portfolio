const db = require('./../models');

module.exports = {
  create: function (req, res) {
    console.log(req.body.contactInfo)
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
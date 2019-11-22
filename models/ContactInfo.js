const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  message: { type: String, required: false}
})

const Contact = mongoose.model("/contactInfo", contactSchema);
module.exports = Contact
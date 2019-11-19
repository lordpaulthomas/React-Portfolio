const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.search(express.static("client/buld"));
}



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-books", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}.`)
})
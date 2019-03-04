const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("./models/db");
const app = express();

require("dotenv").config;

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cors")());
app.use(require("helmet")());
app.use("/api", require("./routes/apiEndpoints"), (req, res) => {
  console.log("Reached Server");
});

// Production
// Set static folder
app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

const mongoose = require("mongoose");
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
mongoose.connect(
  "mongodb+srv://hkTester:pwd2318@test-k51n5.mongodb.net/test?retryWrites=true",
  {
    // mongoose.connect("mongodb://localhost:27017/homeDB", {
    useNewUrlParser: true
  }
);
// Validation
mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", err => console.log("Error with the database!", err));

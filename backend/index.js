const connectToDB = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
// so that our server can read json type data
app.use(express.json());
// connect to database
connectToDB();

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(9000, () => {
  console.log("Listning on port 9000");
});

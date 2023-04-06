require("./config.js");
const app = require("./app.js");
const mongoose = require("mongoose");

const port = process.env.PORT || 8000;

const dbConnection = process.env.DATABASE_CONNECTION_STRING.replace(
  "<password>",
  process.env.PASSWORD
);

mongoose.set("strictQuery", true);

mongoose.connect(dbConnection).then((conn) => {
  console.log("connection established with database");
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}...`);
});

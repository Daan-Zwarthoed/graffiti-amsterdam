const express = require("express");
const app = express();
const pug = require("pug");
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  const data = require("./graffiti.json");
  res.render("index", { data: data });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on PORT : 3000");
});

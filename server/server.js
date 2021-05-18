const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apiRouter = require("./routes/index");

const app = express();

app.use(bodyParser.json());

// CORS Setup
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.use("/api", apiRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log("Listening on 8080");
});

import express from "express";

// import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  console.log("serving home page");
  res.render("homepage");
});
app.get("/echo/:message", (req, res) => {
  const message = req.params.message;
  res.json({
    message: message,
  });
});

app.listen(PORT, () => {
  console.log(`Hello Listening on port ${PORT}`);
});

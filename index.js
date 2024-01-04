import express from "express";

const PORT = process.env.port || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Hello Listening on port ${PORT}`);
});

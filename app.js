const express = require("express");
const connet = require("./schemas");
const app = express();
const port = 3000;
const postsRouter = require("./routes/posts");
const requestMiddleware = (req, res, next) => {
  console.log("Request URL:", req.originalUrl, "-", new Date());
  next();
};
const commentsRouter = require("./routes/comments");

app.use(express.json());
app.use(requestMiddleware);
//const connet = require("./schemas");
connet();

/* Middleware 사용법
requestMiddleware = (req, res, next) => {
  원하는 함수 집어 넣기
  next();
};
*/
app.use("/posts", [postsRouter, commentsRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});

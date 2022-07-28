const express = require("express");
const router = express.Router();
const Post = require("../schemas/post");

// 게시글 생성 [POST]
router.post("", async (req, res) => {
  const { postId, user, title, content } = req.body;

  const createdPost = await Post.create({
    postId,
    user,
    title,
    content,
  });

  res.json({ posts: createdPost });
  console.log("게시글을 생성하였습니다.");
});

// 게시글 목록조회 [GET]
router.get("/", async (req, res) => {
  const post = await Post.find();
  const postId = post.map((post) => post.postId);
  const result = post.map((post) => {
    return {
      postId: post.postId,
      user: post.user,
      title: post.title,
      content: post.content,
    };
  });
  res.send({ result });
});

//게시글 상세조회 [GET]
router.get("/:_postId", async (req, res) => {
  const { postId } = req.params;
  const post = await Post.find();
  const [detail] = post.filter((post) => post.postId === Number(postId));
  res.json({ detail });
  //console.log(req.params);
});

// 게시글 삭제[DELETE]
router.delete("/posts/:/postId", async (req, res) => {
  const { postId } = req.params;

  const existsPosts = await Post.find({ postId });
  if (existsPosts.length > 0) {
    await Post.deleteOne({ postId });
  }
  res.json({ result: "success" });
});
module.exports = router;

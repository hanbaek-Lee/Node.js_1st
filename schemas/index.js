const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/KEVIN_NODEJS")
    .catch((err) => console.log(err));
};
mongoose.connection.on("error", (err) => {
  console.logerror("몽고디비 연결 에러", err);
});

//module.exports = mongoose.model("index", postSchema);
module.exports = connect;

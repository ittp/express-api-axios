let express = require("express");
let logger = require("morgan");

let getRouter = require("./routes/getAxios.js");
let getAsyncRouter = require("./routes/getAsyncAxios.js");
let postRouter = require("./routes/postAxios.js");
let getDB = require("./routes/getAsyncAxios");
let app = express();

app.use(logger("dev"));

app.use("/", getRouter);
app.use("/db", getRouter);
app.use("/async", getAsyncRouter);
app.use("/post", postRouter);

let listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

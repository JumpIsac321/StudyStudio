if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

//modules
const express = require("express");
const app = express();
// const mongoose = require('mongoose')
// mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', error => console.log(error))
// db.once('open', () => console.log('connection sukeesful'))

//routers
indexRouter = require("./routes/index");
quizRouter = require("./routes/quiz");

//directories
const publicDir = __dirname + "/public";

//middleware
app.use(express.static(publicDir));
//app.use(express.json())

//use routers
app.use("/", indexRouter);
// app.use("/quiz", quizRouter);

//start server
app.listen(process.env.PORT || 3000);

// Socket server
const io = require("socket.io")(4000, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("connected succesfuly");
  socket.on("win", () => {
    console.log("someone won");
    socket.broadcast.emit("someone-won");
  });
});

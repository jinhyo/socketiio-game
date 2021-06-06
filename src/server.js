const { join } = require("path");
const express = require("express");
const socketIO = require("socket.io");
const logger = require("morgan");

const PORT = 3000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

app.get("/", (req, res) => res.render("home"));

const server = app.listen(PORT, () =>
  console.log(`✅ Server running: http://localhost:${PORT}`)
);

// const io = socketIO.listen(server);

// io.on("connection", (socket) => {
//   socket.on("newMessage", ({ message }) => {
//     socket.broadcast.emit("messageNotif", {
//       message,
//       nickname: socket.nickname || "Anon",
//     });
//   });
//   socket.on("setNickname", ({ nickname }) => {
//     socket.nickname = nickname;
//   });
// });

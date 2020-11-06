const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const cors = require('cors');
const PORT = process.env.PORT || 9090;


// Making /public folder static
app.use(express.static(__dirname + "/public"));
app.use(cors())
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/socket-client.html");
    // res.send({message: "SUCCESS"})
});

io.on("connection", (client) => {
    console.log("New Client Connected")
});

server.listen(PORT, () => {
  console.log("Socket Server started at Port " + PORT);
});

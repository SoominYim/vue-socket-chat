var app = require("express")();
var server = require("http").createServer(app);

// 소켓서버 설정
var io = require("socket.io")(server);

// setting cors
app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/", function (req, res) {
    res.sendFile("Hello Chat App server");
});

// connection evert handler
// connection 을 수립하고 callback 인자로 socket를 받음
io.on("connection", function (socket) {
    console.log("Connect from Client: " + socket);

    // 클라이언트로 받은 'chat'이라는 이벤트명을 사용해 메세지를 전달받음
    socket.on("chat", function (data) {
        console.log("message from client: " + data.message);

        var rtnMessage = {
            message: data.massage,
        };

        // 클라이언트로 'chat' 이라는 이벤트명을 사용해 메세지를 전달함.
        // .broadcase를 추가하면 자신을 제외한 나머지 클라이언트에게만 세세지를 전달함
        socket.broadcast.emit("chat", rtnMessage);
    });
});

server.listen(3001, function () {
    console.log("socket io server listening on port 3001");
});

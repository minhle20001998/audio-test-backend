
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
const port = 3030
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const whitelist = ['http://localhost:3000/*', 'http://example2.com']
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

routes(app);

io.on("connection", (socket) => {
    socket.on('hello', ( data ) => {
        socket.broadcast.emit('helloReturn',  data )
    })
    socket.on("disconnect", function () {
        console.log(socket.id + ": disconnected");
    });
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
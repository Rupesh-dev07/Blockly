var express = require('express');
const app = express();
var http = require('http');
const server = http.createServer(app);
const port = 3000;
const path = require('path')
const io = require('socket.io')(http);
app.use('/src', express.static(path.join(__dirname,'./client/src')))
app.use('/scripts', express.static(path.join(__dirname, './client/scripts')))
app.use('/assets', express.static(path.join(__dirname, './client/assets')));
// app.use('/scenes', express.static(path.join(__dirname, 'scenes')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../bpm2/client/index.html'))
})
io.on('connection', function(socket) {
    console.log('A user connected: ' + socket.id);

    socket.on('disconnect', function() {
        console.log('A user disconnected: ' + socket.id);
    });
});

server.listen(port, () => {
    console.log('Express is listening on http://localhost:' + port)
})
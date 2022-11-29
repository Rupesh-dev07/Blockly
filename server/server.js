var Blockly = require('blockly');
const { Socket } = require("engine.io");
var express = require('express');
const app = express();
var http = require('http');
const server = http.createServer(app);
const port = 2000;
var cors = require('cors')
var path = require('path')
    // var { Phasergame } = require('./client/client.js')
var { Phasergame } = require('../client/client');
var browser_env = require('browser-env')
browser_env(["navigator"])
const game = new PhaserGame(server);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
app.use(cors())
app.use('/', express.static(path.join(__dirname, '../client')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})
var json = {
        "blocks": {
            "languageVersion": 0,
            "blocks": [{
                "type": "text_print",
                "id": "0b61B|)zMnTbwbPAG1iG",
                "x": 113,
                "y": 238,
                "inputs": {
                    "TEXT": {
                        "shadow": {
                            "type": "text",
                            "id": "_!OgDm+,dRCHii(i|kdL",
                            "fields": {
                                "TEXT": "Hello from Blockly!"
                            }
                        }
                    }
                }
            }]
        }
    }
    /**************** Build Socket Connection ****************/
io.on("connection", function(socket) {
    console.log("a user connected: " + socket.id);
    console.log("Client Connection Established!!");
})
try {
    // Create workspace and load JSON
    var workspace = new Blockly.Workspace();
    Blockly.serialization.workspaces.load(json, workspace);
    // Convert code and log output
    var code = Blockly.Python.workspaceToCode(workspace);
    console.log(code);
} catch (e) {
    console.log(e);
}
server.listen(port, () => {
    console.log('Express is listening on http://localhost:' + port)
})
const colyseus = require('colyseus');
const { MyRoomState } = require('./schema/MyRoomState');

exports.MyRoom = class extends colyseus.Room {
    // Match-maker has instantiated this room
    onCreate(options) {
            this.setState(new MyRoomState());

            this.onMessage("type", (client, message) => {
                //
                // handle "type" message.
                //
            });

        }
        // Client is asking to join this room
    onJoin(client, options) {
        console.log(client.sessionId, "joined!");
    }
    onMessage(client, message) {
            console.log(client.sessionId, "Message")
        }
        //Client has been disconnected
    onLeave(client, consented) {
            console.log(client.sessionId, "left!");
        }
        // Room will be destroyed when last player lefts
    onDispose() {
        console.log("room", this.roomId, "disposing...");
    }

}
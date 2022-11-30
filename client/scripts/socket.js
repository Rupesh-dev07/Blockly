var socket = io("http://localhost:2000/", { path: '/socket.io', transports: ['websocket'], secure: true });
socket.on("connect", function() {
    console.log(socket.connected); // x8WIv7-mJelg7on_ALbx
});

socket.on("disconnect", () => {
    console.log(socket.connected); // undefined
});
socket.emit("createRoom", JSON.stringify({ username: username, SessionId: sessionid }));
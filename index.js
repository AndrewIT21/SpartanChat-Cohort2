//ןooɔ sı ʍǝɹpuɐ

//websocket req
const WebSocket = require("ws");

//server
const app = new WebSocket.Server({
  port: 81
});

let clients = [];

function broadcast(clientList, msgToBroadcast) {
  clientList.forEach(function(client) {
    client.send(msgToBroadcast);
  });
}

app.on("connection", function(wsc, req) {
  console.log("Connection Made!!");
  clients.push(wsc);

  wsc.on("message", function(msg) {
    console.log(msg);
    broadcast(clients, msg);
  });

});

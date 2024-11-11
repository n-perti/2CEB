const websocket = require("websocket");
const { WebSocketServer } = require("ws");

// Create a new websocket server

const wss = new WebSocketServer({ port: 4444 });

// Event handler for new connections

wss.on("connection", (ws) => {
  console.log("New connection");

  // Event handler for new messages from the client
  ws.on("message", (message) => {
    console.log("Message:", message);
  });

  // -> JS Code

  // Example of streaming data to all clients

  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
});

// Event hanlder for disconnections

wss.on("close", () => {
    console.log("A client has disconnected");
});
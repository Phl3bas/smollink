import http from "http";

import { app } from "./app/app";

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

server.listen(PORT);

server.on("listening", () => {
  console.clear();
  console.log("Listening on: http://localhost:" + PORT);
});

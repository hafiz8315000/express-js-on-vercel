import express from "express";
import { httpServerHandler } from "cloudflare:node";

const app = express();

app.get("/", (req, res) => {
  res.send("Express is working on Cloudflare!");
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });

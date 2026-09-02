import express from "express";
import { httpServerHandler } from "cloudflare:node";

const app = express();

app.get("/", (req, res) => {
  res.send("Express is working on Cloudflare!");
});

export default httpServerHandler({ port: 3000, handler: app });

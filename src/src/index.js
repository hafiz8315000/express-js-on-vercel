import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Jadar Decor Express API is running on Cloudflare Workers"
  });
});

export default app;

import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook/campaign", (req, res) => {
  console.log("Campaign webhook:", req.body);
  res.sendStatus(200);
});

app.post("/webhook/call-result", (req, res) => {
  console.log("Call result webhook:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Webhook server running on port ${PORT}`);
});

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const random = Math.random();

  res.json({
    signal: random > 0.5 ? "CALL 📈" : "PUT 📉",
    confidence: Math.floor(random * 100),
    timeframe: "1m"
  });
});

module.exports = router;

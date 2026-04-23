const express = require("express");
const router = express.Router();

async function getBTCPrice() {
  const res = await fetch(
    "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
  );
  const data = await res.json();
  return parseFloat(data.price);
}

router.get("/", async (req, res) => {
  try {
    const price = await getBTCPrice();

    res.json({
      signal: "TEST",
      price,
      source: "binance"
    });
  } catch (err) {
    res.status(500).json({
      error: "failed to fetch price",
      details: err.message
    });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const cards = require('../db/cards')

router.get('/', function(req, res) {
  res.send(JSON.stringify(cards));
});

router.post('/', function(req, res) {
  const card = req.body
  cards.push(card)
  res.status(200).end()
  // res.status(500).end()
});

module.exports = router;

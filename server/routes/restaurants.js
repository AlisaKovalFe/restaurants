const express = require('express');
const router = express.Router();
const restaurants = require('../db/restaurants')

router.get('/', function(req, res) {
    res.send(JSON.stringify(restaurants));
});

router.post('/', function(req, res) {
  const restaurant = req.body
  restaurants.unshift(restaurant)
  res.status(200).end()
  // res.status(500).end()
});

module.exports = router;

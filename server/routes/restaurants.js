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
  // res.status(404).end()
  // res.status(500).end()
});

router.put('/restaurant-edit/:id', function(req, res) {
  const restaurant = req.body
  const { id } = req.params

  restaurants.map((el) => {
    console.log(restaurant)
    if (el.id === +id) {
        el.description = restaurant.description
        el.location = restaurant.location
        el.cover.src = restaurant.cover.src
        el.features.geometry.coordinates[0] = restaurant.coordinates[0]
        el.features.geometry.coordinates[1] = restaurant.coordinates[1]
        el.features.properties.balloonContent = restaurant.balloonContent
        el.features.properties.hintContent = restaurant.hintContent
    }
    return el
})
  res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

router.delete('/:id', function(req, res) {
  const { id } = req.params
  restaurants.forEach((el, index) => {
    if (el.id === +id) {
      restaurants.splice(index, 1)
    }
  })
  res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

module.exports = router;

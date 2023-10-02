const express = require('express');
const router = express.Router();
const fs = require('fs').promises

router.get('/', async function(req, res) {
  const restaurants = await fs.readFile('./db/restaurants.txt', 'utf-8')
  res.send(restaurants);
});

router.post('/', async function(req, res) {
  const restaurant = req.body

  const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
  const regExpForPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  const regExpForSrc = /^https?:\S+.(?:jpe?g|png)$/

  let strPhone
  restaurant.features.properties.balloonContent.match(/<a(.*?)>/g).map((el) => strPhone = el.replace(/[^0-9]/g,""))

  const errors = ['корректное название', 'корректный url фото', 'корректное описание', 'корректную локацию', 'корректный номер телефона']
  const inputs = [!regExp.test(restaurant.title), !regExpForSrc.test(restaurant.cover.src), !regExp.test(restaurant.description), !regExp.test(restaurant.location), !regExpForPhone.test(strPhone)]

  const filteredErrors = errors.filter((el, i) => inputs[i]).join(', ')

  if (!regExp.test(restaurant.title) || !regExpForSrc.test(restaurant.cover.src) || !regExp.test(restaurant.description) || !regExp.test(restaurant.location) || !regExpForPhone.test(strPhone)) {
    res.status(401)
    let message = {
      error: `Данные неполные или некорретные, укажите ${filteredErrors}` 
    }
    res.send(message) 
}
    
  const restaurants = await fs.readFile('./db/restaurants.txt', 'utf-8') 
  const restaurantsObjectFortmat = JSON.parse(restaurants)
  restaurantsObjectFortmat.unshift(restaurant)
  const restaurantsStringFotmat = JSON.stringify(restaurantsObjectFortmat)

  fs.writeFile('./db/restaurants.txt', restaurantsStringFotmat) 

  res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

router.put('/restaurant-edit/:id', async function(req, res) {
  const restaurant = req.body
  const { id } = req.params

  const regExp = /^[?!,.а-яА-ЯёЁ0-9\S\w]/
  const regExpForPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
  const regExpForSrc = /^https?:\S+.(?:jpe?g|png)$/

  let strPhone
  restaurant.balloonContent.match(/<a(.*?)>/g).map((el) => strPhone = el.replace(/[^0-9]/g,""))

  const errors = ['корректное название', 'корректный url фото', 'корректное описание', 'корректную локацию', 'корректный номер телефона']
  const inputs = [!regExp.test(restaurant.title), !regExpForSrc.test(restaurant.cover.src), !regExp.test(restaurant.description), !regExp.test(restaurant.location), !regExpForPhone.test(strPhone)]

  const filteredErrors = errors.filter((el, i) => inputs[i]).join(', ')

  if (!regExp.test(restaurant.title) || !regExpForSrc.test(restaurant.cover.src) || !regExp.test(restaurant.description) || !regExp.test(restaurant.location) || !regExpForPhone.test(strPhone) ) {
    res.status(401)
    let message = {
      error: `Данные неполные или некорретные, укажите ${filteredErrors}` 
    }
    res.send(message) 
  }

  const restaurants = await fs.readFile('./db/restaurants.txt', 'utf-8')
  const restaurantsObjectFortmat = JSON.parse(restaurants)

  restaurantsObjectFortmat.map((el) => {
    if (el.id === +id) {
        el.description = restaurant.description
        el.location = restaurant.location
        el.cover.src = restaurant.cover.src
        el.features.properties.balloonContent = restaurant.balloonContent
        el.features.properties.hintContent = restaurant.hintContent

        if (el.features.geometry.coordinates) {
          el.features.geometry.coordinates[0] = restaurant.coordinates[0]
          el.features.geometry.coordinates[1] = restaurant.coordinates[1]
        }
    }
    return el
})

  const restaurantsStringFotmat = JSON.stringify(restaurantsObjectFortmat)
  fs.writeFile('./db/restaurants.txt', restaurantsStringFotmat)
  
  res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

router.delete('/:id', async function(req, res) {
  const { id } = req.params
  const restaurants = await fs.readFile('./db/restaurants.txt', 'utf-8')
  const restaurantsObjectFortmat = JSON.parse(restaurants)

  restaurantsObjectFortmat.forEach((el, index) => {
    if (el.id === +id) {
      restaurantsObjectFortmat.splice(index, 1)
    }
  })

  const restaurantsStringFotmat = JSON.stringify(restaurantsObjectFortmat)
  fs.writeFile('./db/restaurants.txt', restaurantsStringFotmat)

  res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

module.exports = router;

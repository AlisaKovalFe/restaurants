const express = require('express');
const router = express.Router();
const fs = require('fs').promises

/* GET home page. */
router.get('/', async (req, res) => {
  const gallery = await fs.readFile('./db/gallery.txt', 'utf-8')
  res.send(gallery) && res.status(200).end()
  // res.status(404).end()
  // res.status(500).end()
});

module.exports = router;

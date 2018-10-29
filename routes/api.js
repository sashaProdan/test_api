var express = require('express');
var router = express.Router();
var client = require('../connection');

/* GET users listing. */
router.get('/events', function(req, res, next) {
  client.query('SELECT * FROM testing', (err, res) => {
    console.log(err ? err.stack : res.rows[0]) // Hello World!
  });
  res.send([]);
});

router.post('/events', (req, res) => {
  console.log(req.body);
  res.send('');
})

module.exports = router;

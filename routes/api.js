var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/events', function(req, res, next) {
  res.send([]);
});

router.post('/events', (req, res) => {
  console.log(req.body);
  res.send('');
})

module.exports = router;

var express = require('express');
var router = express.Router();
var client = require('../connection');
var inserts = require('../queries');

// router.get('/events', function(req, res, next) {
//   client.query('SELECT * FROM clicks', (err, res) => {
//     console.log(err ? err.stack : res.rows[0]);
//   });
//   res.send([]);
// });

router.post('/events', (req, res) => {
  const eventObject = JSON.parse(req.body);
  const event = JSON.parse(req.body).event;
  const values = Object.values(eventObject).slice(1);
  let query;

  if (event === 'click') {
    const query = {
      text: inserts.click,
      values,
    }

    client.query(query, (err, res) => {
      console.log(err ? err.stack : 'Success');
    });
    // console.log(`CLICK: ${query.values}`);
    console.log(req.body);

    res.send('Hello');
  } else if (event === 'mousemove') {
    query = {
      text: inserts.mousemove,
      values,
    }

    client.query(query, (err, res) => {
      console.log(err ? err.stack : 'Success');
    });
    console.log(`MOUSEMOVE: ${query.values}`);
    res.send('Hello');

  }
})

module.exports = router;

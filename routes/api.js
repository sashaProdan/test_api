var express = require('express');
var router = express.Router();
var client = require('../connection');
var inserts = require('../queries');
var amqp = require('amqplib');

router.post('/events', (req, res) => {
  const json = JSON.parse(req.body);
  res.send('Success');
  
  json.events.forEach(event => {
    const eventType = event['eType'];
    event['metadata'] = json.metadata;

    amqp.connect('amqp://localhost').then(function(conn) {
      return conn.createChannel().then(function(ch) {
        var ex = 'events';
        var ok = ch.assertExchange(ex, 'direct', {durable: false});

        return ok.then(function() {
          ch.publish(ex, eventType, Buffer.from(JSON.stringify(event)));
          console.log(" [x] Sent %s:'%s'", eventType, JSON.stringify(event));
          return ch.close();
        });
      }).finally(() => conn.close());
    }).catch(console.warn);
  })
})

module.exports = router;

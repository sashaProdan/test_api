const inserts = {
  click:'INSERT INTO link_clicks (link_text, link_url, event_time, metadata) VALUES ($1, $2, $3, $4)',
  mousemove: 'INSERT INTO mouse_moves (x_pos, y_pos, event_time) VALUES ($1, $2, $3)',
}

module.exports = inserts;
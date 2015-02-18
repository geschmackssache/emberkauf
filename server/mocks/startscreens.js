module.exports = function(app) {
  var express = require('express');
  var startscreensRouter = express.Router();

  startscreensRouter.get('/', function(req, res) {
    res.send({
      "startscreens": [{
        id: 1,
        zip: 10245
      }, {
        id: 2,
        zip: 10245
      }]
    });
  });

  startscreensRouter.get('/:id', function(req, res) {
    res.send({
      "startscreen": {
        id: req.params.id
      }, "tiles": [{
        "id": 101,
        "title": '1 Angebot für Dich gefunden',
        "template": 'header',
        "css_class": 'sectionHeader'
      }, {
        "id": 1,
        "title": 'Kinder Schokolade',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Netto Marken-Discount',
        "original_price": '100',
        "discount_price": '77',
        "template": 'offer',
        "css_class": 'offerTile leftWunder'
      }, {
        "id": 102,
        "css_class": 'emptyOffer rightWunder'
      }, {
        "id": 103,
        "title": '2 weitere Angebote für Dich gefunden',
        "template": 'header',
        "css_class": 'sectionHeader'
      }, {
        "id": 2,
        "title": 'I love Milka Pralines',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Kaufland',
        "original_price": '150',
        "discount_price": '99',
        "template": 'offer',
        "css_class": 'offerTile leftWunder'
      }, {
        "id": 3,
        "title": 'Pringles',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Kaisers',
        "original_price": '200',
        "discount_price": '139',
        "template": 'offer',
        "css_class": 'offerTile rightWunder'
      }], "signals": [{
        "id": 1,
        "value": true,
        "tile": 1
      }, {
        "id": 2,
        "value": false,
        "tile": 3
      }]
    });
  });

  app.use('/api/startscreens', startscreensRouter);
};

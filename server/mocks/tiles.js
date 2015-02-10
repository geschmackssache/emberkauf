module.exports = function(app) {
  var express = require('express');
  var tilesRouter = express.Router();

  tilesRouter.get('/', function(req, res) {
    res.send({
      "tiles": [{
        "id": 1,
        "title": 'Kinder Schokolade',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Netto Marken-Discount',
        "original_price": '100',
        "discount_price": '77',
      }, {
        "id": 2,
        "title": 'I love Milka Pralines',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Kaufland',
        "original_price": '150',
        "discount_price": '99'
      }, {
        "id": 3,
        "title": 'Pringles',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Kaisers',
        "original_price": '200',
        "discount_price": '139',
      }]
    });
  });

  tilesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tilesRouter.get('/:id', function(req, res) {
    res.send({
      "tiles": {
        "id": req.params.id,
        "title": 'Kinder Schokolade',
        "image": "http://static.barcoo.com/80177609-1-thumb.jpg",
        "shop_name": 'Netto Marken-Discount',
        "original_price": '100',
        "discount_price": '77',
      }
    });
  });

  tilesRouter.put('/:id', function(req, res) {
    res.send({
      'tiles': {
        id: req.params.id
      }
    });
  });

  tilesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tiles', tilesRouter);
};

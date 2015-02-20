module.exports = function(app) {
  var express = require('express');
  var signalsRouter = express.Router();

  signalsRouter.post('/', function(req, res) {
    res.status(201).send({
      'signals': {
        id: 1,
        value: true,
        tile: 1
      }
    });
  });

  signalsRouter.put('/1', function(req, res) {
    res.send({
      'signals': {
        id: 1,
        value: null,
        tile: 1
      }
    });
  });

  signalsRouter.delete('/1', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/signals', signalsRouter);
};

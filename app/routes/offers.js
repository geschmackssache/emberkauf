import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('startscreen', 1);
  },
  setupController: function(controller, model) {
    controller.set('model', this.store.all('tile'));
  },
  actions: {
    sendLikeSignalForOffer: function(tile) {
      var signal = tile.get('signal');
      if (tile.get('signalValue') === true) {
        signal.deleteRecord();
      } else if (tile.get('signalValue') === false) {
        signal.set('value', true);
      } else {
        signal = this.store.createRecord('signal', {'value': true, 'tile': tile});
      }
      signal.save();
    },
    sendDislikeSignalForOffer: function(tile) {
      var signal = this.store.createRecord('signal', {'value': false, 'tile': tile});
      signal.save();
    }
  }
});

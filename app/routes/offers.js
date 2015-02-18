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
      console.log(tile);
    },
    sendDislikeSignalForOffer: function(tile) {
      console.log(tile);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('tile');
  },
  actions: {
    sendLikeSignalForOffer: function(tile) {
    },
    sendDislikeSignalForOffer: function(tile) {
    }
  }
});

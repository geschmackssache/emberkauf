import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('tile');
  },
  actions: {
    sendLikeSignalForOffer: function(tile) {
      debugger
    },
    sendDislikeSignalForOffer: function(tile) {
      debugger
    }
  }
});

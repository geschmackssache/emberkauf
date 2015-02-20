import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function() {
      this.sendAction('like', this.get('tile'));
    },
    dislike: function() {
      if (this.get('tile').get('signalValue')) {
        this.sendAction('like', this.get('tile'));
      }
      this.set('flipp_css_class', 'flip');
    },
    flipToFront: function() {
      this.set('flipp_css_class', '');
    },
    flipToThanksMessage: function() {
      this.sendAction('dislike', this.get('tile'));
      this.set('flipp_css_class', 'flip flipAgain');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    like: function() {
      this.switchLikes('like');
      this.sendAction('like', this.get('tile'));
      this.set('flipp_css_class', '');
    },
    dislike: function() {
      this.switchLikes('dislike');
      this.sendAction('dislike', this.get('tile'));
      this.set('flipp_css_class', 'flip');
    }
  },
  switchLikes: function(action) {
    if (action === 'like' && this.get('likeClass') != 'active') {
      this.set('dislikeClass', '');
      this.set('likeClass', 'active');
    } else if (action === 'dislike' && this.get('dislikeClass') != 'active') {
      this.set('likeClass', '');
      this.set('dislikeClass', 'active');
    }
  }
});

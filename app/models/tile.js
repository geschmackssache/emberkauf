import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  shop_image: DS.attr('string'),
  shop_name: DS.attr('string'),
  original_price: DS.attr('number'),
  discount_price: DS.attr('number'),
  template: DS.attr('string'),
  css_class: DS.attr('string'),
  signal: DS.belongsTo('signal'),

  signalValue: Ember.computed.alias('signal.value'),
  like_css_class: function() {
    return this.get('signalValue') ? 'active' : ''
  }.property('signalValue'),
  dislike_css_class: function() {
    return this.get('signalValue') === false ? 'active' : ''
  }.property('signalValue')
});

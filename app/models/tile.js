import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  shop_image: DS.attr('string'),
  shop_name: DS.attr('string'),
  original_price: DS.attr('number'),
  discount_price: DS.attr('number')
});
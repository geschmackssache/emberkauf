import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('boolean'),
  tile: DS.belongsTo('tile')
});

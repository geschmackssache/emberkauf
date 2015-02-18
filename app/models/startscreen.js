import DS from 'ember-data';

export default DS.Model.extend({
  tiles: DS.hasMany('tile')
});

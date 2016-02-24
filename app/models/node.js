import DS from 'ember-data';

export default DS.Model.extend({
  nodeID: DS.attr('string'),
  defaultProfile: DS.attr('string'),
  hardware: DS.hasMany('hardware')
});

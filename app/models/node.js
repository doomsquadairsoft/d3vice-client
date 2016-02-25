import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  nodeId: DS.attr('string'),
  defaultProfile: DS.attr('string'),
  hardware: DS.hasMany('hardware', {async: true})
});

import DS from 'ember-data';

export default DS.Model.extend({
  isRunning: DS.attr('boolean'),
  endTime: DS.attr('date'),
  nodes: DS.hasMany('node'),
  mode: DS.attr('string')
});

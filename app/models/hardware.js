import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  gpio: DS.attr('number'),
  node: DS.belongsTo('node', {async: true})
});

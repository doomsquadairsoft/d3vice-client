import DS from 'ember-data';

export default DS.Model.extend({
  time: DS.attr('Date'),
  type: DS.attr('String'),
  from: DS.belongsTo('node'),
  param: DS.attr('Number')
});

import DS from 'ember-data';

export default DS.Model.extend({
  attributes: DS.attr(),
  name: DS.attr(),
  race: DS.attr(),
  hometown: DS.attr(),
  class: DS.attr(),
  spell: DS.attr(),
  image: DS.attr()
});

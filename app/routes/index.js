import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    console.log('test')
    return this.store.findAll('minion');
  }
});

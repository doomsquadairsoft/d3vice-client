import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    transitionTo(route) {
      this.transitionTo(route);
    }
  }
});

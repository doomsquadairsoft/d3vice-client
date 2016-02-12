import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('tasks');
  this.route('scientists');
  this.route('derps');
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

let Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event', {
    path: 'events'
  }, function() {
    this.route('new');
    this.route('show', {
      path: '/:id'
    });
    this.route('edit', {
      path: '/:id/edit'
    });
  });
});

export default Router;

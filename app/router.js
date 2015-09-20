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
      path: '/:event_id'
    });
    this.route('edit', {
      path: '/:event_id/edit'
    });
  });
});

export default Router;

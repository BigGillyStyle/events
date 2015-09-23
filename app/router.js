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
      path: '/:eventId'
    });
    this.route('edit', {
      path: '/:eventId/edit'
    });
    this.route('race', {
      path: 'races'
    }, function() {
      this.route('show', {
        path: '/:raceId'
      });
    });
  });
});

export default Router;

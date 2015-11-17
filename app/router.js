import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('show', { path: ':event_id' });
    this.route('edit', { path: ':event_id/edit' });
  });
  this.route('page-not-found', { path: '/*wildcard' });
});

export default Router;

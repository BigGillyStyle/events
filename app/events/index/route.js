import Ember from 'ember';

export default Ember.Route.extend({
  querySvc: Ember.inject.service('event-query'),
  model() {
    return this.get('querySvc').findEvents();
  }
});

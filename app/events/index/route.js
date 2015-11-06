import Ember from 'ember';

export default Ember.Route.extend({
  eventQuery: Ember.inject.service(),
  model() {
    return this.get('eventQuery').findEvents();
  }
});

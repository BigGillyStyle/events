import Ember from 'ember';

export default Ember.Route.extend({
  eventQuery: Ember.inject.service(),
  model() {
    return this.get('eventQuery').findEvents();
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('allEvents', this.get('eventQuery').findEvents());
    controller.set('query', Ember.Object.create({}));
  }
});

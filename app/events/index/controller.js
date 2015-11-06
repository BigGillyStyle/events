import Ember from 'ember';

export default Ember.Controller.extend({
  eventQuery: Ember.inject.service(),
  allEvents: [],
  init() {
    this._super(...arguments);
    this.set('allEvents', this.get('eventQuery').findEvents());
  },
  actions: {
    navigateToEvent(eventId) {
      this.transitionToRoute('events.show', eventId);
    },
    raceTypesChanged(types) {
      let _events = this.get('eventQuery').filterEventsByRaceTypes(this.get('allEvents'), types);
      this.set('model', _events);
    }
  }
});

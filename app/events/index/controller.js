import Ember from 'ember';

export default Ember.Controller.extend({
  eventQuery: Ember.inject.service(),
  actions: {
    navigateToEvent(eventId) {
      this.transitionToRoute('events.show', eventId);
    },
    raceTypesChanged(types) {
      let _events = this.get('eventQuery').filterEventsByRaceTypes(this.get('model'), types);
      // now we need to re-draw the map and set the model to the new set of events
    }
  }
});

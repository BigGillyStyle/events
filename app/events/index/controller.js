import Ember from 'ember';

export default Ember.Controller.extend({
  eventQuery: Ember.inject.service(),
  distances: Ember.computed('model', function() {
    let events = this.get('model');
    let distances = events.map(function(event) {
      let races = event.get('races');
      return races.mapBy('totalDistanceKilometers');
    });
    return [].concat.apply([], distances);
  }),
  minDistance: Ember.computed.min('distances'),
  maxDistance: Ember.computed.max('distances'),
  actions: {
    navigateToEvent(eventId) {
      this.transitionToRoute('events.show', eventId);
    },
    raceTypesChanged(types) {
      this.set('query.types', types);
      let _events = this.get('eventQuery').filterEvents(this.get('allEvents'), this.get('query'));
      console.log(`Received ${_events.get('length')} events back from raceTypesChanged query`);
      this.set('model', _events);
    },
    distanceChanged(distanceLowerBound, distanceUpperBound) {
      this.set('query.distanceLowerBound', distanceLowerBound);
      this.set('query.distanceUpperBound', distanceUpperBound);
      let _events = this.get('eventQuery').filterEvents(this.get('allEvents'), this.get('query'));
      console.log(`Received ${_events.get('length')} events back from distanceChanged query`);
      this.set('model', _events);
    }
  }
});

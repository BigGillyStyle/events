import Ember from 'ember';

export default Ember.Controller.extend({
  eventQuery: Ember.inject.service(),
  distances: Ember.computed('allEvents', function() {
    let events = this.get('allEvents');
    let distances = events.map(function(event) {
      let races = event.get('races');
      return races.mapBy('totalDistanceKilometers');
    });
    return [].concat.apply([], distances);
  }),
  minDistance: Ember.computed.min('distances'),
  maxDistance: Ember.computed.max('distances'),
  dates: Ember.computed('allEvents', function() {
    return this.get('allEvents').mapBy('startDate');
  }),
  minDate: Ember.computed.min('dates'),
  maxDate: Ember.computed.max('dates'),
  filterEvents() {
    let _events = this.get('eventQuery').filterEvents(this.get('allEvents'), this.get('query'));
    this.set('model', _events);
  },
  actions: {
    navigateToEvent(eventId) {
      this.transitionToRoute('events.show', eventId);
    },
    raceTypesChanged(types) {
      this.set('query.types', types);
      this.filterEvents();
    },
    distanceChanged(distanceLowerBound, distanceUpperBound) {
      this.set('query.distanceLowerBound', distanceLowerBound);
      this.set('query.distanceUpperBound', distanceUpperBound);
      this.filterEvents();
    },
    dateChanged(fromDate, toDate) {
      this.set('query.fromDate', fromDate);
      this.set('query.toDate', toDate);
      this.filterEvents();
    },
    locationChanged(km, lat, lon) {
      this.set('query.radius', km);
      this.set('query.lat', lat);
      this.set('query.lon', lon);
      this.filterEvents();
    }
  }
});

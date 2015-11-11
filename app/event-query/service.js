import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  allEvents: {
    orderBy: 'startTime',
    startAt: new Date(new Date().setDate(new Date().getDate() - 1)).getTime(),
    limitToFirst: 1000
  },
  findEvents(criteria) {
    if (!!criteria) {
      return [];
    } else {
      return this.get('store').query('event', this.get('allEvents'));
    }
  },
  filterEvents(events, query) {
    console.log(`Querying against ${events.get('length')} events`);
    console.log(`Query types: ${query.types}`);
    console.log(`Query lower bound: ${query.distanceLowerBound}`);
    console.log(`Query upper bound: ${query.distanceUpperBound}`);
    let _events = this.filterEventsByDistance(
      this.filterEventsByRaceTypes(events, query.types),
      query.distanceLowerBound, query.distanceUpperBound);
    console.log(`Filtering events yielded ${_events.get('length')} events`);
    return _events;
  },
  filterEventsByRaceTypes(events, types) {
    if (!!types) {
      let _events = events.filter((event) => {
        return event.get('races').any((race) => {
          return types.contains(race.get('type'));
        });
      });
      console.log(`Filtering events by race type yielded ${_events.get('length')} events`);
      return _events;
    } else {
      return events;
    }
  },
  filterEventsByDistance(events, distanceLowerBound, distanceUpperBound) {
    if (!!distanceLowerBound && !!distanceUpperBound) {
      let _events = events.filter((event) => {
        return event.get('races').any((race) => {
          let distance = race.get('totalDistanceKilometers');
          console.log(`Total distance for race ${race.get('shortName')} is ${distance} km`);
          return (distanceLowerBound <= distance) && (distance <= distanceUpperBound);
        });
      });
      console.log(`Filtering events by distance yielded ${_events.get('length')} events`);
      return _events;
    } else {
      return events;
    }
  }
});

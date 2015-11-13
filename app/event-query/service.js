import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  allEvents: {
    orderBy: 'startTime',
    startAt: new Date(new Date()
        .setDate(new Date()
          .getDate() - 1))
      .getTime(),
    limitToFirst: 1000
  },
  findEvents(criteria) {
    if (!!criteria) {
      return [];
    } else {
      return this.get('store')
        .query('event', this.get('allEvents'));
    }
  },
  filterEvents(events, query) {
    let _events = this.filterEventsByDistance(
      this.filterEventsByRaceTypes(
        this.filterEventsByDates(
          events, query.fromDate, query.toDate), query.types),
      query.distanceLowerBound, query.distanceUpperBound);
    return _events;
  },
  filterEventsByRaceTypes(events, types) {
    if (!!types) {
      let _events = events.filter((event) => {
        return event.get('races')
          .any((race) => {
            return types.contains(race.get('type'));
          });
      });
      return _events;
    } else {
      return events;
    }
  },
  filterEventsByDistance(events, distanceLowerBound, distanceUpperBound) {
    if (!!distanceLowerBound && !!distanceUpperBound) {
      let _events = events.filter((event) => {
        return event.get('races')
          .any((race) => {
            let distance = race.get('totalDistanceKilometers');
            return (distanceLowerBound <= distance) && (distance <= distanceUpperBound);
          });
      });
      return _events;
    } else {
      return events;
    }
  },
  filterEventsByDates(events, fromDate, toDate) {
    if (!!fromDate && !!toDate) {
      let _events = events.filter(function(event) {
        const fromTime = fromDate.getTime();
        const toTime = toDate.getTime();
        const eventStartTime = event.get('startTime');
        return (fromTime <= eventStartTime) && (eventStartTime <= toTime);
      });
      return _events;
    } else {
      return events;
    }
  }
});

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
      return this.get('store').query('event', this.get('allEvents'));
    }
  },
  filterEvents(events, query) {
    let _events = this.filterEventsByDistance(
      this.filterEventsByRaceTypes(
        this.filterEventsByDates(
          this.filterEventsByLocation(events, query.radius, query.lat, query.lon),
          query.fromDate, query.toDate),
        query.types),
      query.distanceLowerBound, query.distanceUpperBound);
    return _events;
  },
  filterEventsByRaceTypes(events, types) {
    if (!!types) {
      return events.filter((event) => {
        return event.get('races')
          .any((race) => {
            return types.contains(race.get('type'));
          });
      });
    } else {
      return events;
    }
  },
  filterEventsByDistance(events, distanceLowerBound, distanceUpperBound) {
    if (!!distanceLowerBound && !!distanceUpperBound) {
      return events.filter((event) => {
        return event.get('races')
          .any((race) => {
            let distance = race.get('totalDistanceKilometers');
            return (distanceLowerBound <= distance) && (distance <= distanceUpperBound);
          });
      });
    } else {
      return events;
    }
  },
  filterEventsByDates(events, fromDate, toDate) {
    if (!!fromDate && !!toDate) {
      return events.filter(function(event) {
        const fromTime = fromDate.getTime();
        const toTime = toDate.getTime();
        const eventStartTime = event.get('startTime');
        return (fromTime <= eventStartTime) && (eventStartTime <= toTime);
      });
    } else {
      return events;
    }
  },
  filterEventsByLocation(events, radiusInKm, lat, lon) {
    if (!!radiusInKm && !!lat && !!lon) {
      let _events = events.filter(function(event) {
        let _dist = geolib.getDistance({
          latitude: event.get('lat'),
          longitude: event.get('lon')
        }, {
          latitude: lat,
          longitude: lon
        }) / 1000;
        console.log(`Distance: ${_dist}`);
        return _dist <= radiusInKm;
      });
      return _events;
    } else {
      return events;
    }
  }
});

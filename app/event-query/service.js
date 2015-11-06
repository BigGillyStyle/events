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
  filterEventsByRaceTypes(events, types) {
    if (!!types) {
      return events.filter((event) => {
        return event.get('races').any((race) => {
          return types.contains(race.get('type'));
        });
      });
    } else {
      return events;
    }
  }
});

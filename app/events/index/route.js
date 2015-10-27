import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('event', {
      orderBy: 'startTime',
      startAt: new Date(new Date().setDate(new Date().getDate() - 1)).getTime(),
      limitToFirst: 10
    });
  }
});

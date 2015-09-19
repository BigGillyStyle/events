import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('event', {
      orderBy: 'date',
      startAt: new Date(new Date().setDate(new Date().getDate()-1)).getTime(),
      limitToFirst: 10
    });
  }
});

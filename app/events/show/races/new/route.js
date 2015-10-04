import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log('Hit the events.show.races.new model hook');
    return this.store.createRecord('race', {
      event: this.modelFor('events.show')
    });
  }
});

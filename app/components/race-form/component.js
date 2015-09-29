import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setRaceType(type) {
      this.set('model.raceType', type);
    }
  }
});

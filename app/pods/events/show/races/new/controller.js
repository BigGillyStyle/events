import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    setRaceType(type) {
      this.set('model.raceType', type);
    }
  }
});

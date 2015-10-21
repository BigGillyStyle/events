import Ember from 'ember';

export default Ember.Component.extend({
  surfaces: [{
    label: 'Road/Track',
    value: 'road'
  }, {
    label: 'Off-Road',
    value: 'offroad'
  }, {
    label: 'Mixed',
    value: 'mixed'
  }, {
    label: 'Indoors',
    value: 'indoors'
  }],

  actions: {
    setRaceType(type) {
      this.set('model.type', type);
    },
    cancel() {
      this.attrs.cancel();
    },
    addAnotherRace() {
      this.attrs.addAnotherRace();
    },
    finish() {
      this.attrs.finish();
    }
  }
});

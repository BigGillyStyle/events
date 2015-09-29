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
  units: [{
    label: 'Miles',
    value: 'miles'
  }, {
    label: 'Kilometers',
    value: 'kilometers'
  }, {
    label: 'Meters',
    value: 'meters'
  }],

  actions: {
    setRaceType(type) {
      this.set('model.raceType', type);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  distanceTypes: [{
    label: 'Marathon',
    value: 'marathon'
  }, {
    label: 'Half Marathon',
    value: 'halfMarathon'
  }, {
    label: '10k',
    value: '10k'
  }, {
    label: '5k',
    value: '5k'
  }, {
    label: 'Custom',
    value: 'custom'
  }],
  units: [{
    value: 'miles',
    label: 'Miles'
  }, {
    value: 'kilometers',
    label: 'Kilometers'
  }],
  surfaces: [{
    label: 'Road',
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

  distanceType: 'marathon',
  isCustom: Ember.computed('distanceType', function() {
    return this.get('distanceType') === 'custom';
  }),

  actions: {
  }
});

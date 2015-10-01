import Ember from 'ember';

export default Ember.Component.extend({
  converter: Ember.inject.service('distance-converter'),
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
  distanceType: 'marathon',
  isCustom: Ember.computed('distanceType', function() {
    return this.get('distanceType') === 'custom';
  })
});

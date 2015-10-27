import Ember from 'ember';

export default Ember.Component.extend({
  distanceNumber: '',
  distanceUnits: '',
  runType: '',
  runTypes: [],
  converter: Ember.inject.service('distance-converter'),
  runTypesSvc: Ember.inject.service('run-types'),
  init() {
    this._super(...arguments);
    const converter = this.get('converter');
    const runTypesSvc = this.get('runTypesSvc');
    let types = Ember.copy(runTypesSvc.types);
    types.pushObject({
      value: 'custom',
      label: 'Custom'
    });
    this.set('runTypes', types);
    this.set('runType', 'custom');
    this.set('distanceNumber', '');
    this.set('distanceUnits', converter.units[0].value);
    this.setDistance();
  },
  isCustom: Ember.computed('runType', function() {
    return this.get('runType') === 'custom';
  }),
  setDistance() {
    let distance;
    if (this.get('isCustom')) {
      distance = this.get('converter').convertToKilometers(this.get('distanceNumber'), this.get('distanceUnits'));
    } else {
      this.get('model').set('shortName', this.get('runType'));
      distance = this.get('runTypesSvc.types').findBy('value', this.get('runType')).kilometers;
    }
    this.get('model').set('runKilometers', distance);
  },
  actions: {
    distanceChanged() {
      this.setDistance();
    }
  }
});

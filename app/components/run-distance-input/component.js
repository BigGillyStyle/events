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
    let runTypes = Ember.copy(runTypesSvc.types);
    runTypes.pushObject({
      value: 'custom',
      label: 'Custom'
    });
    this.set('runTypes', runTypes);
    this.set('runType', runTypes[0].value);
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
      distance = this.get('runTypesSvc.types').findBy('value', this.get('runType')).kilometers;
    }
    this.get('model').set('runDistanceInKilometers', distance);
  },
  actions: {
    distanceChanged() {
      this.setDistance();
    }
  }
});

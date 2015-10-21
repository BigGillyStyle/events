import Ember from 'ember';

export default Ember.Component.extend({
  distanceNumber: '',
  distanceUnits: '',
  runType: '',
  runTypes: [],
  converter: Ember.inject.service('distance-converter'),
  init() {
    this._super(...arguments);
    const converter = this.get('converter');
    let runTypes = Ember.copy(converter.runTypes);
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
      distance = this.get('converter.runTypes').findBy('value', this.get('runType')).kilometers;
    }
    this.get('model').set('runDistanceInKilometers', distance);
  },
  actions: {
    distanceChanged() {
      this.setDistance();
    }
  }
});

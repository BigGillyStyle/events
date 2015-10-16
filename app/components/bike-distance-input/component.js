import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.set('distanceNumber', '');
    this.set('distanceUnits', this.get('converter').supportedUnits[0].value);
  },
  converter: Ember.inject.service('distance-converter'),
  distanceNumber: '',
  distanceUnits: 'miles',
  actions: {
    setDistance() {
      let convert = this.get('converter').convertToKilometers(this.get('distanceNumber'), this.get('distanceUnits'));
      this.get('model').set('bikeDistanceInKilometers', convert);
    }
  }
});

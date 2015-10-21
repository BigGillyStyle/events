import Ember from 'ember';

export default Ember.Component.extend({
  distanceNumber: '',
  distanceUnits: '',
  converter: Ember.inject.service('distance-converter'),
  init() {
    this._super(...arguments);
    this.set('distanceNumber', '');
    this.set('distanceUnits', this.get('converter').units[0].value);
  },
  actions: {
    setDistance() {
      let convert = this.get('converter').convertToKilometers(this.get('distanceNumber'), this.get('distanceUnits'));
      this.get('model').set('bikeDistanceInKilometers', convert);
    }
  }
});

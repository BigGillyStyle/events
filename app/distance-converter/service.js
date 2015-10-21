import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  kmToMiles: 0.621371,
  units: [{
    value: 'miles',
    label: 'Miles',
    multiplyToKM: 1.60934
  }, {
    value: 'meters',
    label: 'Meters',
    multiplyToKM: 0.001
  }, {
    value: 'kilometers',
    label: 'Kilometers',
    multiplyToKM: 1.0
  }],
  convertToKilometers(number, units) {
    const supportedUnits = this.get('units');
    const factor = _.result(_.find(supportedUnits, {
      'value': units
    }), 'multiplyToKM');
    return number * factor;
  },
  convertToMiles(number, units) {
    const kms = this.convertToKilometers(number, units);
    return kms * this.get('kmToMiles');
  }
});

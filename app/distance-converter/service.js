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
  runTypes: [{
    value: 'marathon',
    label: 'Marathon',
    kilometers: 42.195
  }, {
    value: 'halfMarathon',
    label: 'Half Marathon',
    kilometers: 21.0975
  }, {
    value: '10k',
    label: '10k',
    kilometers: 10
  }, {
    value: '5k',
    label: '5k',
    kilometers: 5
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

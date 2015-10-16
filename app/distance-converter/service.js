import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  supportedUnits: [{
    value: 'miles',
    label: 'Miles',
    multiplyToKM: 1.60934,
    multiplyToMiles: 1.0
  }, {
    value: 'meters',
    label: 'Meters',
    multiplyToKM: 0.001,
    multiplyToMiles: 0.000621371
  }, {
    value: 'kilometers',
    label: 'Kilometers',
    multiplyToKM: 1.0,
    multiplyToMiles: 0.621371
  }],
  convertToKilometers(number, units) {
    const supportedUnits = this.get('supportedUnits');
    const factor = _.result(_.find(supportedUnits, {
      'value': units
    }), 'multiplyToKM');
    return number * factor;
  },
  convertToMiles(number, units) {
    const supportedUnits = this.get('supportedUnits');
    const factor = _.result(_.find(supportedUnits, {
      'value': units
    }), 'multiplyToMiles');
    return number * factor;
  }
});

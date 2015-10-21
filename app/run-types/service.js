import Ember from 'ember';

export default Ember.Service.extend({
  types: [{
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
  }]
});

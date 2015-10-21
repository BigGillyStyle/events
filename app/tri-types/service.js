import Ember from 'ember';

export default Ember.Service.extend({
  types: [{
    value: 'ironman',
    label: 'Ironman',
    kilometers: 42.195
  }, {
    value: 'halfIronman',
    label: 'Half Ironman',
    kilometers: 21.0975
  }, {
    value: 'ituLong',
    label: 'ITU Long',
    kilometers: 10
  }, {
    value: 'olympic',
    label: 'Olympic',
    kilometers: 5
  }, {
    value: 'sprint',
    label: 'Sprint',
    kilometers: 5
  }]
});

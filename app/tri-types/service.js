import Ember from 'ember';

export default Ember.Service.extend({
  types: [{
    value: 'ironman',
    label: 'Ironman',
    swimKilometers: 3.86,
    bikeKilometers: 180.25,
    runKilometers: 42.195
  }, {
    value: 'halfIronman',
    label: 'Half Ironman',
    swimKilometers: 1.9,
    bikeKilometers: 90,
    runKilometers: 21.09
  }, {
    value: 'ituLong',
    label: 'ITU Long',
    swimKilometers: 3,
    bikeKilometers: 80,
    runKilometers: 20
  }, {
    value: 'olympic',
    label: 'Olympic',
    swimKilometers: 1.5,
    bikeKilometers: 40,
    runKilometers: 10
  }, {
    value: 'sprint',
    label: 'Sprint',
    swimKilometers: 0.75,
    bikeKilometers: 20,
    runKilometers: 5
  }],
  totalDistance(triType) {
    const types = this.get('types');
    const type = types.findBy('value', triType);
    return type.swimKilometers + type.bikeKilometers + type.runKilometers;
  }
});

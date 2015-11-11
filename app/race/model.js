import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  converter: Ember.inject.service('distance-converter'),
  runTypesSvc: Ember.inject.service('run-types'),
  triTypesSvc: Ember.inject.service('tri-types'),

  // 'Ironman', 'Marathon', etc.
  shortName: DS.attr('string'),
  shortNameLabel: Ember.computed('shortName', function() {
    let types;
    if (this.get('isRun')) {
      types = this.get('runTypesSvc.types');
    } else {
      types = this.get('triTypesSvc.types');
    }
    return types.findBy('value', this.get('shortName')).label;
  }),

  // "run", "bike", "tri"
  type: DS.attr('string', {
    defaultValue: 'run'
  }),
  isRun: Ember.computed('type', function() {
    return this.get('type') === 'run';
  }),
  isBike: Ember.computed('type', function() {
    return this.get('type') === 'bike';
  }),
  isTri: Ember.computed('type', function() {
    return this.get('type') === 'tri';
  }),

  swimKilometers: DS.attr('number', {
    defaultValue: 0
  }),
  bikeKilometers: DS.attr('number', {
    defaultValue: 0
  }),
  runKilometers: DS.attr('number', {
    defaultValue: 0
  }),
  bikeMiles: Ember.computed('bikeKilometers', function() {
    return this.get('converter').convertToMiles(this.get('bikeKilometers'), 'kilometers');
  }),
  runMiles: Ember.computed('runKilometers', function() {
    return this.get('converter').convertToMiles(this.get('runKilometers'), 'kilometers');
  }),
  swimMiles: Ember.computed('swimKilometers', function() {
    return this.get('converter').convertToMiles(this.get('swimKilometers'), 'kilometers');
  }),
  totalDistanceKilometers: Ember.computed('swimKilometers', 'bikeKilometers', 'runKilometers', function() {
    return this.get('swimKilometers') + this.get('bikeKilometers') + this.get('runKilometers');
  }),

  // "road", "offroad", "mix", "indoors"
  surface: DS.attr('string', {
    defaultValue: 'road'
  })
});

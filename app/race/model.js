import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  event: DS.belongsTo('event'),

  // "run", "bike",, "tri"
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

  swimDistanceInKilometers: DS.attr('number'),
  bikeDistanceInKilometers: DS.attr('number'),
  runDistanceInKilometers: DS.attr('number'),

  bikeDistanceInMiles: Ember.computed('bikeDistanceInKilometers', function() {
    return this.get('bikeDistanceInKilometers') * 0.621371;
  }),

  // "road", "offroad", "mix", "indoors"
  surface: DS.attr('string', {
    defaultValue: 'road'
  })
});

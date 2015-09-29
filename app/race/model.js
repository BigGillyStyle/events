import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  event: DS.belongsTo('event'),

  // "run", "bike",, "tri"
  raceType: DS.attr('string', {
    defaultValue: 'run'
  }),
  isRun: Ember.computed('raceType', function() {
    return this.get('raceType') === 'run';
  }),
  isBike: Ember.computed('raceType', function() {
    return this.get('raceType') === 'bike';
  }),
  isTri: Ember.computed('raceType', function() {
    return this.get('raceType') === 'tri';
  }),

  // EX: number: 100, units: "miles"
  swimDistanceNumber: DS.attr('number'),
  swimDistanceUnits: DS.attr('string'),
  bikeDistanceNumber: DS.attr('number'),
  bikeDistanceUnits: DS.attr('string'),
  runDistanceNumber: DS.attr('number'),
  runDistanceUnits: DS.attr('string'),

  // "road", "offroad", "mix", "indoors"
  courseSurface: DS.attr('string', {
    defaultValue: 'road'
  })
});

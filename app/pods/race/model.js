import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  // Based on research on 9/22/2015...polymorphic models (STI) with Ember Data
  // 2.0 do not appear to be ready for primetime

  event: DS.belongsTo('event'),

  // "run", "bike", "swim", "tri"
  raceType: DS.attr('string', {
    defaultValue: 'run'
  }),
  isRun: Ember.computed('raceType', function () {
    return this.get('raceType') === 'run';
  }),
  isBike: Ember.computed('raceType', function () {
    return this.get('raceType') === 'bike';
  }),
  isSwim: Ember.computed('raceType', function () {
    return this.get('raceType') === 'swim';
  }),
  isTri: Ember.computed('raceType', function () {
    return this.get('raceType') === 'tri';
  }),

  // EX: number: 100, units: "miles"
  swimDistanceNumber: DS.attr('number'),
  swimDistanceUnits: DS.attr('string'),
  bikeDistanceNumber: DS.attr('number'),
  bikeDistanceUnits: DS.attr('string'),
  runDistanceNumber: DS.attr('number'),
  runDistanceUnits: DS.attr('string'),

  // "road", "off-road", "mix", "indoors"
  courseSurface: DS.attr('string'),

  // timed event with 1st/2nd/3rd places/awards?
  isCompetitive: DS.attr('boolean'),
  
  elevationGainInMeters: DS.attr('number'),
  timeLimitInHours: DS.attr('number'),
  entryFee: DS.attr('number')
});

import Ember from 'ember';

export default Ember.Component.extend({
  distanceConverter: Ember.inject.service(),
  sliderStart: Ember.computed('minDistance', 'maxDistance', function() {
    return [this.get('minDistance'), this.get('maxDistance')];
  }),
  sliderRange: Ember.computed('minDistance', 'maxDistance', function() {
    return Ember.Object.create({
      'min': [this.get('minDistance')],
      'max': [this.get('maxDistance')]
    });
  }),
  distanceLowerBoundMiles: Ember.computed('distanceLowerBound', function() {
    return this.get('distanceConverter')
      .convertToMiles(this.get('distanceLowerBound'), 'kilometers');
  }),
  distanceUpperBoundMiles: Ember.computed('distanceUpperBound', function() {
    return this.get('distanceConverter')
      .convertToMiles(this.get('distanceUpperBound'), 'kilometers');
  }),
  setup: Ember.on('init', function() {
    this.set('distanceLowerBound', this.get('minDistance'));
    this.set('distanceUpperBound', this.get('maxDistance'));
  }),
  actions: {
    distanceChanged(value) {
      this.attrs.distanceChanged(value[0], value[1]);
    },
    distanceSlide(value) {
      this.set('distanceLowerBound', value[0]);
      this.set('distanceUpperBound', value[1]);
    }
  }
});

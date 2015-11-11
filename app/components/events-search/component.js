import Ember from 'ember';

export default Ember.Component.extend({
  isRun: true,
  isBike: true,
  isTri: true,
  types: Ember.computed('isRun', 'isBike', 'isTri', function() {
    let _types = [];
    if (this.get('isRun')) {
      _types.push('run');
    }
    if (this.get('isBike')) {
      _types.push('bike');
    }
    if (this.get('isTri')) {
      _types.push('tri');
    }
    return _types;
  }),
  typeChanged: Ember.observer('isRun', 'isBike', 'isTri', function() {
    return this.attrs.raceTypesChanged(this.get('types'));
  }),
  sliderStart: Ember.computed('minDistance', 'maxDistance', function() {
    return [this.get('minDistance'), this.get('maxDistance')];
  }),
  sliderRange: Ember.computed('minDistance', 'maxDistance', function() {
    return Ember.Object.create({
      'min': [this.get('minDistance')],
      'max': [this.get('maxDistance')]
    });
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

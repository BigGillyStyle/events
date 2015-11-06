import Ember from 'ember';

export default Ember.Component.extend({
  isRun: true,
  isBike: true,
  isTri: true,
  types: Ember.computed('isRun', 'isBike', 'isTri', function() {
    let _types = [];
    if (this.get('isRun')) {_types.push('run');}
    if (this.get('isBike')) {_types.push('bike');}
    if (this.get('isTri')) {_types.push('tri');}
    return _types;
  }),
  typeChanged: Ember.observer('isRun', 'isBike', 'isTri', function() {
    return this.attrs.raceTypesChanged(this.get('types'));
  })
});

import Ember from 'ember';

export default Ember.Component.extend({
  triType: '',
  triTypes: [],
  triTypesSvc: Ember.inject.service('tri-types'),
  init() {
    this._super(...arguments);
    const triTypesSvc = this.get('triTypesSvc');
    let types = Ember.copy(triTypesSvc.types);
    this.set('triTypes', types);
    this.set('triType', types[0].value);
    this.setDistance();
  },
  setDistance() {
    this.get('model').set('shortName', this.get('triType'));
  },
  actions: {
    distanceChanged() {
      this.setDistance();
    }
  }
});

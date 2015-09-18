import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      console.log('Submitting model...', this.get('model'));
      var newEvent = this.store.createRecord('event', this.get('model'));
      newEvent.save();
    }
  }
});

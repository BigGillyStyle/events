import Ember from 'ember';

export default Ember.Controller.extend({
  event: {},

  actions: {
    submit() {
      var newEvent = this.store.createRecord('event', event);
      newEvent.save();
    }
  }
});

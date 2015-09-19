import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const flashMessages = Ember.get(this, 'flashMessages');

      var newEvent = this.store.createRecord('event', this.get('model'));
      newEvent.save().then(() => {
        this.transitionToRoute('event');
        flashMessages.success("Added event: " + this.get('model.name'));
      });
    },
    cancel() {
      this.transitionToRoute('event');
    }
  }
});

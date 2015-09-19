import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const flashMessages = Ember.get(this, 'flashMessages');

      var event = this.get('model');
      event.save().then(() => {
        this.transitionToRoute('event');
        flashMessages.success("Successfully saved changes to: " + this.get('model.name'));
      });
    },
    cancel() {
      this.transitionToRoute('event');
    }
  }
});

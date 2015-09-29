import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const flashMessages = Ember.get(this, 'flashMessages');

      let event = this.get('model');
      event.save().then(() => {
        this.transitionToRoute('events');
        flashMessages.success(`Successfully saved changes to: ${this.get('model.name')}`);
      });
    },
    cancel() {
      this.transitionToRoute('events');
    }
  }
});

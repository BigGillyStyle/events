import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let event = this.get('model');
      event.save().then((eventResponse) => {
        this.transitionToRoute('events');
        flashMessages.success(`Successfully saved changes to: ${eventResponse.get('name')}`);
      });
    },
    cancel() {
      this.transitionToRoute('events.show', this.get('model.id'));
    }
  }
});

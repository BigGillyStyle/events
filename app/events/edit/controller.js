import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      let event = this.get('model');
      event.save().then((eventResponse) => {
        this.transitionToRoute('events.show', eventResponse.get('id'));
      });
    },
    cancel() {
      this.transitionToRoute('events.show', this.get('model.id'));
    }
  }
});

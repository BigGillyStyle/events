import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      let event = this.get('model');
      event.saveWithGeo();
      this.transitionToRoute('events.show', event.id);
    },
    cancel() {
      this.transitionToRoute('events.show', this.get('model.id'));
    }
  }
});

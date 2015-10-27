import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      let model = this.store.createRecord('event', this.get('model'));
      model.saveWithGeo();
      this.transitionToRoute('events.show', model.id);
    }
  }
});

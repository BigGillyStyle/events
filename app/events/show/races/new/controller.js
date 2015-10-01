import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAndAddAnotherRace() {
      this.get('model').save().then((response) => {
        let model = this.store.createRecord('race', {
          event: this.modelFor('events.show')
        });
        model.save().then((response) => {
          this.set('model', response);
        });
      });
    },
    finish() {
      const flashMessages = Ember.get(this, 'flashMessages');

      this.get('model').save().then((response) => {
        this.transitionToRoute('events.index');
        flashMessages.success(`Successfully saved changes to: ${response.get('event.name')}`);
      });
    }
  }
});

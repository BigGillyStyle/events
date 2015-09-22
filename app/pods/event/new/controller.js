import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
        const flashMessages = Ember.get(this, 'flashMessages');

        let model = this.store.createRecord('event', this.get('model'));
        model.save().then((response) => {
          this.transitionToRoute('event.show', response);
          flashMessages.success(`Added event: ${this.get('model.name')}`);
        });
      },
    cancel() {
      this.transitionToRoute('event');
    }
  }
});

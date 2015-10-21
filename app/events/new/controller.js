import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      let model = this.store.createRecord('event', this.get('model'));
      model.save().then((response) => {
        this.transitionToRoute('events.show.races.new', response.id);
      });
    }
  }
});

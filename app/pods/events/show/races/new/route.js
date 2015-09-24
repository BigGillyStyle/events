import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let model = this.store.createRecord('race', {
      event: this.modelFor('events.show')
    });
    console.log('Model:', model);
    return model.save();
  }
});

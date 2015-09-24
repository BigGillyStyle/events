import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let mod = {
      event: this.modelFor('events.show')
    };
    console.log('Model:', mod);
    return mod;
  }
});

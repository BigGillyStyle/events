import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    navigateToEvent(eventId) {
      this.transitionToRoute('events.show', eventId);
    }
  }
});

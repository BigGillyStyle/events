import Ember from 'ember';

export default Ember.Controller.extend({
  race: {},
  emptyRace(event) {
    return this.store.createRecord('race', {
      event: event
    });
  },
  actions: {
    editEvent() {
      this.transitionToRoute('events.edit', this.get('model.id'));
    },
    addRace() {
      this.set('race', this.emptyRace(this.get('model')));
    },
    cancelAddRace() {
    },
    saveAndAddAnotherRace() {
      this.get('race').save().then((raceResponse) => {
        let event = raceResponse.get('event').get('content');
        event.get('races').pushObject(raceResponse);
        event.save().then((eventResponse) => {
          this.set('race', this.emptyRace(eventResponse));
        });
      });
    },
    finishAddRace() {
      const flashMessages = Ember.get(this, 'flashMessages');
      this.get('race').save().then((raceResponse) => {
        let event = raceResponse.get('event').get('content');
        event.get('races').pushObject(raceResponse);
        event.save().then((eventResponse) => {
          this.transitionToRoute('events.index');
          flashMessages.success(`Successfully saved changes to: ${eventResponse.get('name')}`);
        });
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAndAddAnotherRace() {
      let race = this.get('model');
      race.save().then((raceResponse) => {
        let event = raceResponse.get('event').get('content');
        event.get('races').pushObject(raceResponse);
        event.save().then((eventResponse) => {
          let newRace = this.store.createRecord('race', {
            event: eventResponse
          });
          this.set('model', newRace);
        });
      });
    },
    finish() {
      const flashMessages = Ember.get(this, 'flashMessages');
      let race = this.get('model');
      race.save().then((raceResponse) => {
        let event = raceResponse.get('event').get('content');
        event.get('races').pushObject(raceResponse);
        event.save().then((eventResponse) => {
          this.transitionToRoute('events.index');
          flashMessages.success(`Successfully saved changes to: ${eventResponse.get('event.name')}`);
        });
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  race: Ember.Object.create({}),
  emptyRace(event) {
    return this.store.createRecord('race', {
      event
    });
  },
  actions: {
    editEvent() {
      this.transitionToRoute('events.edit', this.get('model.id'));
    },
    addRace() {
      this.set('race', this.emptyRace(this.get('model')));
    },
    cancelAddRace() {},
    saveAndAddAnotherRace() {
      this.get('race')
        .save()
        .then((raceResponse) => {
          let event = raceResponse.get('event')
            .get('content');
          event.get('races')
            .pushObject(raceResponse);
          event.save()
            .then((eventResponse) => {
              this.set('race', this.emptyRace(eventResponse));
            });
        });
    },
    finishAddRace() {
      this.get('race')
        .save()
        .then((raceResponse) => {
          let event = raceResponse.get('event')
            .get('content');
          event.get('races')
            .pushObject(raceResponse);
          event.save()
            .then((eventResponse) => {
              this.transitionToRoute('events.show', eventResponse.get('id'));
            });
        });
    },
    deleteRace(race) {
      let event = this.get('model');
      event.get('races')
        .removeObject(race);
      event.save()
        .then(() => {
          race.destroyRecord();
        });
    }
  }
});

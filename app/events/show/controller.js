import Ember from 'ember';

export default Ember.Controller.extend({
  race: Ember.Object.create({}),
  emptyRace(event) {
    return this.store.createRecord('race', {
      event
    });
  },
  saveRaceToEvent() {
    let _race = this.get('race');
    let _event = this.get('model');
    let _races = _event.get('races');
    _races.addObject(_race);
    return _event.save();
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
      this.saveRaceToEvent().then((eventResponse) => {
        eventResponse.reload();
        this.set('race', this.emptyRace(eventResponse));
      });
    },
    finishAddRace() {
      this.saveRaceToEvent().then((eventResponse) => {
        eventResponse.reload();
        this.transitionToRoute('events.show', eventResponse.get('id'));
      });
    },
    deleteRace(race) {
      let event = this.get('model');
      event.get('races').removeObject(race);
      event.save();
    }
  }
});

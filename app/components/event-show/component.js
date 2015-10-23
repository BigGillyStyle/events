import Ember from 'ember';

export default Ember.Component.extend({
  addingRace: false,
  actions: {
    editEvent() {
        this.attrs.editEvent();
      },
      addRace() {
        this.set('addingRace', true);
        this.attrs.addRace();
      },
      cancelAddRace() {
        this.set('addingRace', false);
        this.attrs.cancelAddRace();
      },
      saveAndAddAnotherRace() {
        this.attrs.saveAndAddAnotherRace();
      },
      finishAddRace() {
        this.set('addingRace', false);
        this.attrs.finishAddRace();
      }
  }
});

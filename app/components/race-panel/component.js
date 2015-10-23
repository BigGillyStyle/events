import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    showModal() {
      this.set('isShowingModal', true);
    },
    closeModal() {
      this.set('isShowingModal', false);
    },
    deleteRace() {
      this.set('isShowingModal', false);
      this.attrs.deleteRace(this.get('model'));
    }
  }
});

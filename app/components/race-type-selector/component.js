import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buttonSelected(type) {
      this.attrs.buttonSelected(type);
    }
  }
});

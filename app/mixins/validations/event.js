import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {
  validations: {
    "model.name": {
      presence: true
    },
    "model.city": {
      presence: true
    },
    "model.state": {
      presence: true
    }
  }
});

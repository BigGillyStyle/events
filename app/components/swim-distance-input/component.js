import Ember from 'ember';

export default Ember.Component.extend({
  converter: Ember.inject.service('distance-converter')
});

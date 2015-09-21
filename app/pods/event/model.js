import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string', {
    defaultValue: 'AL'
  }),
  country: DS.attr('string', {
    defaultValue: 'US'
  }),
  time: DS.attr('number'),
  date: Ember.computed('time', {
    get() {
        return new Date(this.get('time'));
      },
    set(key, value) {
      this.set('time', (new Date(value).getTime()));
      return value;
    }
  }),
  url: DS.attr('string')
});
